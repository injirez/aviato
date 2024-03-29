from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from django.http import FileResponse
from rest_framework.views import APIView
from rest_framework import status
from django.shortcuts import get_object_or_404

from django.contrib.auth.models import User
from client.models import Profile

from .models import Advert
from .serializers import AdvertSerializer, AdvertInfoSerializer

from django_filters import rest_framework as filters
from .filters import AdvertFilter

from drf_spectacular.utils import extend_schema


class AdvertViewSet(ModelViewSet):
    queryset = Advert.objects.all()
    serializer_class = AdvertSerializer

    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = AdvertFilter

    @extend_schema(
        responses={200: AdvertSerializer},
    )
    def list(self, request):
        """
        List of adverts
        """
        try:
            user_instance = get_object_or_404(Profile, user=request.user)
        except TypeError:
            user_instance = False
        queryset = self.filter_queryset(self.get_queryset())
        serializer = self.serializer_class(queryset, many=True,
                                           context={'user': user_instance})

        return Response({'response': serializer.data},
                        status=status.HTTP_200_OK)

    @extend_schema(
        responses={200: AdvertInfoSerializer},
    )
    def retrieve(self, request, **kwargs):
        """
        Retrieve single advert
        """
        queryset = get_object_or_404(Advert, pk=kwargs.get('pk'))
        serializer = AdvertInfoSerializer(queryset)

        return Response({'response': serializer.data},
                        status=status.HTTP_200_OK)

    @extend_schema(
        request=AdvertInfoSerializer,
        responses={201: AdvertInfoSerializer},
    )
    def create(self, request, **kwargs):
        """
        Create advert
        """
        user_instance = get_object_or_404(Profile, user=request.user)
        # user_instance = Profile.objects.get(pk=1)
        serializer = AdvertInfoSerializer(data=request.data,
                                          context={'user': user_instance})
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response({'response': serializer.data},
                        status=status.HTTP_201_CREATED)

    # def update(self):

    def destroy(self, request, pk):
        """
        Deletes advert
        """
        object = get_object_or_404(Advert, pk=pk)
        object.delete()

        return Response({'response': 'Advert deleted'},
                        status=status.HTTP_204_NO_CONTENT)

    @extend_schema(
        request=AdvertInfoSerializer,
        responses={200: AdvertInfoSerializer},
    )
    def update(self, request, pk):
        """
        Updates advert
        """
        object = get_object_or_404(Advert, pk=pk)
        serializer = AdvertInfoSerializer(object,
                                          data=request.data,
                                          context={'images': request.data.get('images')},
                                          partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response({'response': serializer.data},
                        status=status.HTTP_200_OK)
