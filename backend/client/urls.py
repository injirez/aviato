from django.urls import include
from django.urls import re_path as url, path
from .views import UpdateProfileAPIView
from rest_framework import routers


app_name = 'client'

# router = routers.DefaultRouter()
# router.register('profile', ProfileViewSet, basename='profile')

urlpatterns = [
    # url('', include(router.urls)),
    path('update_profile/', UpdateProfileAPIView.as_view(), name='update_profile'),
]