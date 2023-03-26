from .models import Profile
from django.shortcuts import get_object_or_404
from .serializers import ProfileSerializer, UserSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.models import User


class ProfileAPIView(APIView):

    def get(self, request):
        """
        Get user profile info
        Return profile object
        or user object if profile does not exist
        """
        user_instance = get_object_or_404(User, pk=request.user.id)
        try:
            queryset = Profile.objects.get(user=user_instance)
            serializer = ProfileSerializer(queryset, many=False)

            return Response({'response': serializer.data})
        except Profile.DoesNotExist:
            serializer = UserSerializer(user_instance, many=False)
            return Response({'response': {'user': serializer.data}})

    def post(self, request):
        """
        Edit user profile
        user.username, user.first_name,
        user.last_name, user.email,
        phone: +7, photo: filefield
        Return profile object
        """
        user_instance = get_object_or_404(User, pk=request.user.id)
        try:
            profile = Profile.objects.get(user=user_instance)
            serializer = ProfileSerializer(instance=profile, data=request.data)
            serializer.is_valid(raise_exception=True)
        except Profile.DoesNotExist:
            serializer = ProfileSerializer(data=request.data, context={'user': user_instance})
            serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response({'response': serializer.data})
