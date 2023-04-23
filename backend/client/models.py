from django.db import models
from django.contrib.auth.models import User
from phonenumber_field.modelfields import PhoneNumberField
from django.conf import settings

class Profile(models.Model):
    # phonedsf = models.CharField(max_length=11, verbose_name='Phone number')
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True)
    phone = PhoneNumberField(region='RU', unique=True, null=True, verbose_name='phone number')
    photo = models.ImageField(upload_to='client/media', null=True, verbose_name='profile photo')
