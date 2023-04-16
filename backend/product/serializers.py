from rest_framework import serializers
from .models import Model, Brand

class ModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Model
        fields = '__all__'


class BrandSerializer(serializers.ModelSerializer):
    model = ModelSerializer(many=True)

    class Meta:
        model = Brand
        fields = '__all__'
