from django.db import models
from django.core.validators import MinValueValidator
from django.core.validators import MaxValueValidator

# Create your models here.
class Item(models.Model):
    # database fields
    name = models.CharField(max_length=20)
    quantity = models.PositiveSmallIntegerField(
                validators=[MinValueValidator(1), MaxValueValidator(1000)]
    )

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['-id']