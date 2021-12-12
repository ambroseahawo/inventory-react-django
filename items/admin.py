from django.contrib import admin
from .models import Item

# Register your models here.
# admin.site.register(Item)
@admin.register(Item)
class ItemModel(admin.ModelAdmin):
    list_display = ('name', 'quantity', 'timestamp')
    list_filter = ('name', 'quantity')
    search_fields = ('name',)
    ordering = ('-timestamp',)

# @admin.register()
# class Admin(admin.ModelAdmin):
#     '''Admin View for '''

#     list_display = ('',)
#     list_filter = ('',)
#     inlines = [
#         Inline,
#     ]
#     raw_id_fields = ('',)
#     readonly_fields = ('',)
#     search_fields = ('',)
#     date_hierarchy = ''
#     ordering = ('',)
