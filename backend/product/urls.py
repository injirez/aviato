from django.urls import path

from .views import GetModelsAPIView


app_name = 'product'


urlpatterns = [
    path('get_models/', GetModelsAPIView.as_view(), name='get_models'),
]
