from rest_framework import serializers
from .models import Advert
from product.models import Product
from client.serializers import UserSerializer


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'


class AdvertInfoSerializer(serializers.ModelSerializer):
    product = ProductSerializer()
    seller = UserSerializer(required=False)

    def create(self, validated_data):
        validated_data['seller'] = self.context.get('user')
        product = Product.objects.create(**validated_data.get('product'))
        validated_data['product'] = product

        return Advert.objects.create(**validated_data)

    class Meta:
        model = Advert
        fields = '__all__'


class AdvertSerializer(serializers.ModelSerializer):
    product = ProductSerializer()

    class Meta:
        model = Advert
        fields = ('name', 'price', 'product')
