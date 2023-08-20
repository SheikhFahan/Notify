from django.db import models

from django.contrib.auth.models import User

# Create your models here.

class UserProfile(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="profile")
    name = models.CharField(max_length=100, null= True)
    email = models.CharField(max_length=100, null= True)
    phone = models.CharField(max_length=12, null= True)

    def __str__(self) -> str:
        if self.name:
            return self.name
        return "userX"