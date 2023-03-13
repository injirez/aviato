from django.shortcuts import render
from .models import Profile
from django.shortcuts import get_object_or_404
from .serializers import ProfileSerializer
from rest_framework.viewsets import ViewSet
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.models import User


class UpdateProfileAPIView(APIView):
    def get(self, request):
        user_id = request.user.id
        # user = User.objects.get(pk=user_id)
        # data = request.data
        # data['user_id'] = user_id
        queryset = Profile.objects.all()
        serializer = ProfileSerializer(queryset, many=True)
        # serializer.is_valid(raise_exception=True)
        # serializer.save()

        return Response({'response': serializer.data})

    def post(self, request):
        user_id = request.user.id
        try:
            profile = Profile.objects.get(user=user_id)
            serializer = ProfileSerializer(profile, data=request.data, many=False)
            serializer.is_valid(raise_exception=True)
        except:
            data = request.data
            data['user'] = user_id
            serializer = ProfileSerializer(data=data, many=False)
            serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response({'response': serializer.data})
