from rest_framework.viewsets import ModelViewSet
from .models import HouseImage
from .serializers import HouseImageSerializer

class HouseImageView(ModelViewSet):
    queryset = HouseImage.objects.all()
    serializer_class = HouseImageSerializer
