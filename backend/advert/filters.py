from django_filters import rest_framework as filters
from .models import Advert


class AdvertFilter(filters.FilterSet):
    name = filters.CharFilter(lookup_expr='icontains', field_name='name')
    price = filters.RangeFilter()
    product_type = filters.CharFilter(field_name='product__type')
    product_brand = filters.CharFilter(field_name='product__brand')
    product_model = filters.CharFilter(field_name='product__model')
    product_release_date = filters.IsoDateTimeFromToRangeFilter(field_name='product__release_date')
    product_power = filters.RangeFilter(field_name='product__power')
    ordering = filters.OrderingFilter(
        fields=(
            ('price', 'price'),
            ('created_at', 'date')
        )
    )

    class Meta:
        model = Advert
        fields = ('name', 'price', 'product_type',
                  'product_brand', 'product_model',
                  'product_release_date', 'product_power')
