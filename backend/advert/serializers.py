from rest_framework import serializers
from .models import Advert
from product.models import Product
from client.serializers import ProfileSerializer


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'


class AdvertInfoSerializer(serializers.ModelSerializer):
    product = ProductSerializer()
    seller = ProfileSerializer(required=False)

    def create(self, validated_data):
        validated_data['seller'] = self.context.get('user')
        product = Product.objects.create(**validated_data.get('product'))
        validated_data['product'] = product

        return Advert.objects.create(**validated_data)

    def update(self, instance, validated_data):
        product = instance.product
        product_data = validated_data.pop('product', product)

        product.type = product_data.pop('type', product.type)
        product.brand = product_data.pop('brand', product.brand)
        product.model = product_data.pop('model', product.model)
        product.release_date = product_data.pop('release_date', product.release_date)
        product.power = product_data.pop('power', product.power)

        product.save()
        instance.save()

        return instance

    class Meta:
        model = Advert
        fields = '__all__'


class AdvertSerializer(serializers.ModelSerializer):
    product = ProductSerializer()
    seller = ProfileSerializer(required=False)

    class Meta:
        model = Advert
        fields = ('id', 'name', 'price', 'product', 'seller')
