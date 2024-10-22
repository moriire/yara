from rest_framework.viewsets import ModelViewSet
from .models import House
from .serializers import HouseSerializer

class HouseView(ModelViewSet):
    serializer_class = HouseSerializer
    queryset = House.objects.all().select_related()




