from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class House(models.Model):
    agent = models.ForeignKey(User, on_delete=models.CASCADE, related_name="house_agent")
    title = models.CharField(max_length=32)
    location = models.CharField(max_length=32)
    description = models.TextField()
    duration = models.PositiveIntegerField()
    price = models.DecimalField(max_digits=13, decimal_places=2)
    bedroom = models.PositiveSmallIntegerField(default=0)
    bathrooms = models.PositiveSmallIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
    