from rest_framework import serializers
from .models import Advert, Images, Location
from product.models import Product
from client.serializers import ProfileSerializer


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Images
        fields = '__all__'


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'


class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = '__all__'


class AdvertInfoSerializer(serializers.ModelSerializer):
    product = ProductSerializer()
    seller = ProfileSerializer(required=False)
    images = ImageSerializer(many=True, required=False)
    location = LocationSerializer()

    def create(self, validated_data):
        validated_data['seller'] = self.context.get('user')
        product = Product.objects.create(**validated_data.get('product'))
        validated_data['product'] = product
        location = Location.objects.create(**validated_data.get('location'))
        validated_data['location'] = location

        return Advert.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.name = validated_data.pop('name', instance.name)
        instance.description = validated_data.pop('description', instance.description)
        instance.price = validated_data.pop('price', instance.price)
        instance.save()

        product_data = validated_data.pop('product', False)
        if product_data:
            product = instance.product
            product.type = product_data.pop('type', product.type)
            product.brand = product_data.pop('brand', product.brand)
            product.model = product_data.pop('model', product.model)
            product.release_date = product_data.pop('release_date', product.release_date)
            product.power = product_data.pop('power', product.power)
            product.save()

        images_data = self.context.pop('images', False)
        if images_data:
            if type(images_data) == list:
                for image in images_data:
                    image = Images.objects.create(image=image)
                    instance.images.add(image)
            else:
                image = Images.objects.create(image=images_data)
                instance.images.add(image)

        location_data = validated_data.pop('location', False)
        if location_data:
            location = instance.location
            location.country = product_data.pop('country', location.country)
            location.city = product_data.pop('city', location.city)
            location.save()

        return instance

    class Meta:
        model = Advert
        fields = '__all__'


class AdvertSerializer(serializers.ModelSerializer):
    product = ProductSerializer()
    seller = ProfileSerializer(required=False)
    images = ImageSerializer(many=True)
    favourite = serializers.SerializerMethodField('is_favourite')
    location = LocationSerializer()

    def is_favourite(self, advert):
        return advert.seller == self.context.get('user')

    class Meta:
        model = Advert
        fields = ('id', 'name', 'price', 'product', 'seller',
                  'images', 'favourite', 'location')
