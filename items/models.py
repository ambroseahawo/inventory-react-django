from django.db import models
from django.core.validators import MinValueValidator
from django.core.validators import MaxValueValidator

# Create your models here.
class Item(models.Model):
    # database fields
    timestamp = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=20)
    quantity = models.PositiveSmallIntegerField(
                validators=[MinValueValidator(1), MaxValueValidator(1000)])
                
    class Meta:
        ordering = ['-timestamp']