from django.db import models
from client.models import Profile
from product.models import Product
from django.contrib.postgres.fields import ArrayField


class Images(models.Model):
    image = models.ImageField(upload_to='advert/media',
                              null=True, blank=True)


class Location(models.Model):
    country = models.CharField(verbose_name='Country',
                               max_length=100)
    city = models.CharField(verbose_name='City',
                            max_length=100)


class Advert(models.Model):
    name = models.CharField(verbose_name='Name of advert',
                            max_length=200)

    description = models.TextField(verbose_name='Description of advert')

    price = models.IntegerField(verbose_name='Price of advert')

    seller = models.ForeignKey(Profile, on_delete=models.CASCADE)

    product = models.ForeignKey(Product, on_delete=models.CASCADE)

    # images = ArrayField(
    #     models.ImageField(upload_to='advert/media',
    #                       null=True, blank=True),
    #     null=True, blank=True)
    images = models.ManyToManyField(Images)

    favourites = models.ManyToManyField(Profile, related_name='adverts',
                                        null=True, blank=True)

    location = models.ForeignKey(Location, on_delete=models.CASCADE)

    created_at = models.DateTimeField(verbose_name='Date created',
                                      auto_now=True)
