from django.db import models


class Model(models.Model):
    name = models.CharField(verbose_name='Name of the vehicle model',
                            max_length=200)


class Brand(models.Model):
    name = models.CharField(verbose_name='Name of the vehicle brand',
                            max_length=50)

    model = models.ManyToManyField(Model,
                                   verbose_name='Possible models for brand')


class Product(models.Model):
    PLANE = 'plane'
    HELICOPTER = 'helicopter'
    GLIDER = 'glider'
    PARTS = 'parts'

    TYPE_CHOICES = ((PLANE, PLANE),
                    (HELICOPTER, HELICOPTER),
                    (GLIDER, GLIDER),
                    (PARTS, PARTS))

    type = models.CharField(
        choices=TYPE_CHOICES,
        max_length=50,
    )
    brand = models.CharField(verbose_name='Name of the vehicle brand',
                             max_length=50)

    model = models.CharField(verbose_name='Name of the vehicle model',
                             max_length=200, blank=True)

    release_date = models.DateField(verbose_name='Release date of advert',
                                    blank=True)

    power = models.IntegerField(verbose_name='Power of engine',
                                blank=True)
