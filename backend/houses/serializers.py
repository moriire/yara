
from rest_framework import serializers
from .models import House
from thumbs.models import HouseImage
from thumbs.serializers import HouseImageSerializer

class HouseSerializer(serializers.ModelSerializer):
    images = HouseImageSerializer(many=True, required=False, read_only=True)
    uploads = serializers.ListField(
        child=serializers.ImageField(max_length=1000000, allow_empty_file=False, use_url=False),
        write_only=True,
        required=False
    )
    class Meta:
        model = House
        fields = ("id", "title", "description", "agent", "price", "duration", "images", "uploads", "bedroom", "bathrooms")

    def create(self, validated_data):
        images_data = validated_data.pop('images', [])
        house = House.objects.create(**validated_data)
        for image_data in images_data:
            HouseImage.objects.create(product=House, **image_data)
        return house