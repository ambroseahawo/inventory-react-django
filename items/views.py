from django.shortcuts import HttpResponse, get_object_or_404
from .models import Item
from .serializers import ItemSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
from rest_framework import status

# Create your views here.
@api_view(['GET', 'POST']) # the view allows only two request methods
def items_list_view(request):
    # get all items in the database
    if request.method == 'GET':
        items = Item.objects.all()
        # items is a queryset
        # add the attr many=True when serializing
        serializer = ItemSerializer(items, many=True)
        return Response(serializer.data) # browserable api
    elif request.method =='POST':
        # data = JSONParser().parse(request)
        serializer = ItemSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
