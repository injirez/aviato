from rest_framework import serializers
from .models import Profile
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    username = serializers.CharField(required=False)
    first_name = serializers.CharField(required=False)
    last_name = serializers.CharField(required=False)
    email = serializers.CharField(required=False)
    date_joined = serializers.CharField(read_only=True)

    class Meta:
        model = User
        fields = ('username', 'first_name', 'last_name', 'email', 'date_joined')


class ProfileInfoSerializer(serializers.ModelSerializer):
    user = UserSerializer(required=False)

    def update(self, instance, validated_data):
        user_data = validated_data.get('user', False)
        if user_data:
            instance.user.username = user_data.get('username', instance.user.username)
            instance.user.first_name = user_data.get('first_name', instance.user.first_name)
            instance.user.last_name = user_data.get('last_name', instance.user.last_name)
            instance.user.email = user_data.get('email', instance.user.email)
            instance.user.save()
        instance.phone = validated_data.get('phone', instance.phone)
        instance.photo = validated_data.get('photo', instance.photo)
        instance.save()

        return instance

    class Meta:
        model = Profile
        fields = '__all__'


class ProfileSerializer(serializers.ModelSerializer):

    def create(self, validated_data):
        validated_data['user'] = self.context.get('user')

        return Profile.objects.create(**validated_data)

    class Meta:
        model = Profile
        fields = '__all__'
