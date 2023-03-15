from django.urls import include
from django.urls import re_path as url, path
from .views import ProfileAPIView
from rest_framework import routers


app_name = 'client'

# router = routers.DefaultRouter()
# router.register('profile', ProfileViewSet, basename='profile')

urlpatterns = [
    # url('', include(router.urls)),
    path('profile/', ProfileAPIView.as_view(), name='update_profile'),
]