from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status

from .models import Brand
from .serializers import BrandSerializer

from drf_spectacular.utils import extend_schema


class GetModelsAPIView(APIView):
    @extend_schema(
        responses={200: BrandSerializer},
    )
    def get(self, request):
        queryset = Brand.objects.all()
        serializer = BrandSerializer(queryset, many=True)

        return Response({'response': serializer.data},
                        status=status.HTTP_200_OK)
