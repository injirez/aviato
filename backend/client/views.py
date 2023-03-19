from django.shortcuts import render
from .models import Profile
from django.shortcuts import get_object_or_404
from .serializers import ProfileSerializer, ProfileInfoSerializer
from rest_framework.viewsets import ViewSet
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.models import User


class ProfileAPIView(APIView):

    def get(self, request):
        print(request.user)
        user_instance = User.objects.get(pk=request.user.id)
        try:
            queryset = Profile.objects.get(user=user_instance)
            serializer = ProfileInfoSerializer(queryset, many=False)

            return Response({'response': serializer.data})
        except Profile.DoesNotExist:
            return Response({'response': {}})


    def post(self, request):
        user_instance = User.objects.get(pk=request.user.id)
        try:
            profile = Profile.objects.get(user=user_instance)
            serializer = ProfileInfoSerializer(instance=profile, data=request.data)
            serializer.is_valid(raise_exception=True)
        except Profile.DoesNotExist:
            serializer = ProfileSerializer(data=request.data, context={'user': user_instance})
            serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response({'response': serializer.data})
