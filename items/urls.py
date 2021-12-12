from django.urls import path
from .views import items_list_view, items_detail_view

app_name = 'items'

urlpatterns = [
    path('', items_list_view, name='items_list'),
    path('<int:id>/', items_detail_view, name='items_detail')
]
