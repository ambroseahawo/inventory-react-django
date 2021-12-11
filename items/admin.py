from django.contrib import admin
from .models import Item

# Register your models here.
# admin.site.register(Item)
@admin.register(Item)
class ItemModel(admin.ModelAdmin):
    list_display = ('name', 'quantity')
    list_filter = ('name', 'quantity')
