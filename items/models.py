from django.db import models

# Create your models here.
class Item(models.Model):
    # database fields
    name = models.CharField(max_length=20)
    quantity = models.PositiveIntegerField()

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['-id']