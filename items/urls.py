from django.urls import path
from .views import items_list_view

app_name = 'items'

urlpatterns = [
    path('api/items/', items_list_view, name='items_list'),
]
