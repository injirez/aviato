from .models import Profile
from django.shortcuts import get_object_or_404
from .serializers import ProfileSerializer, UserSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.models import User
from rest_framework import status

from advert.models import Advert
from advert.serializers import AdvertSerializer

from drf_spectacular.utils import extend_schema


class ProfileAPIView(APIView):

    @extend_schema(
        responses={200: ProfileSerializer},
    )
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

            return Response({'response': serializer.data},
                            status=status.HTTP_200_OK)

        except Profile.DoesNotExist:
            serializer = UserSerializer(user_instance, many=False)
            return Response({'response': {'user': serializer.data}},
                            status=status.HTTP_206_PARTIAL_CONTENT)

    @extend_schema(
        request=ProfileSerializer,
        responses={201: ProfileSerializer},
    )
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
            serializer = ProfileSerializer(instance=profile,
                                           data=request.data)
            serializer.is_valid(raise_exception=True)
        except Profile.DoesNotExist:
            serializer = ProfileSerializer(data=request.data,
                                           context={'user': user_instance})
            serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response({'response': serializer.data},
                        status=status.HTTP_201_CREATED)


class AddFavouritesAPIView(APIView):
    @extend_schema(
        responses={200: 'Added to favourites'},
    )
    def post(self, request, pk):
        """
        Adds advert to favourite
        pk
        Return status
        """
        user_instance = get_object_or_404(User, pk=request.user.id)
        profile = get_object_or_404(Profile, user=user_instance.id)

        object = Advert.objects.get(pk=pk)
        object.favourites.add(profile)

        return Response({'response': 'Added to favourites'},
                        status=status.HTTP_200_OK)


class GetFavouritesAPIView(APIView):
    @extend_schema(
        responses={200: AdvertSerializer},
    )
    def get(self, request):
        """
        Get all favourites
        Return advert objects
        """
        user_instance = get_object_or_404(User, pk=request.user.id)
        profile = get_object_or_404(Profile, user=user_instance.id)

        favourites = profile.adverts.all()
        serializer = AdvertSerializer(favourites, many=True)

        return Response({'response': serializer.data},
                        status=status.HTTP_200_OK)
