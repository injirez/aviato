from django.urls import include
from django.urls import re_path as url, path
from .views import ProfileAPIView, GetFavouritesAPIView, AddFavouritesAPIView
from rest_framework import routers


app_name = 'client'

# router = routers.DefaultRouter()
# router.register('profile', ProfileViewSet, basename='profile')

urlpatterns = [
    # url('', include(router.urls)),
    path('profile/', ProfileAPIView.as_view(), name='update_profile'),
    path('add_favourites/<int:pk>', AddFavouritesAPIView.as_view(), name='add_favourites'),
    path('get_favourites/', GetFavouritesAPIView.as_view(), name='get_favourites'),
]
