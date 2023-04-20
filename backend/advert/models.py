from django.db import models
from client.models import Profile
from product.models import Product


class Advert(models.Model):
    name = models.CharField(verbose_name='Name of advert',
                            max_length=200)

    description = models.TextField(verbose_name='Description of advert')

    price = models.IntegerField(verbose_name='Price of advert')

    seller = models.ForeignKey(Profile, on_delete=models.CASCADE)

    product = models.ForeignKey(Product, on_delete=models.CASCADE)

    # images = models.ArrrayField(
    #     models.ImageField(upload_to='advert/media',
    #                       null=True, blank=True),
    #     null=True, blank=True)

    created_at = models.DateTimeField(verbose_name='Date created',
                                      auto_now=True)
