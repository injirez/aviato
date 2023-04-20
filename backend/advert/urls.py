from django.urls import include
from django.urls import re_path as url
from .views import AdvertViewSet
from rest_framework import routers


app_name = 'advert'

router = routers.DefaultRouter()
router.register('', AdvertViewSet, basename='advert')

urlpatterns = [
    url('', include(router.urls)),
]