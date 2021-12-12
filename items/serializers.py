from rest_framework import serializers
from .models import Item


class ItemSerializer(serializers.Serializer):
    # specify model types
    # use serializers instead of models
    name = serializers.CharField(max_length=20)
    quantity = serializers.IntegerField(max_value=1000, min_value=1)

    # creating item
    def create(self, validated_data):
        return Item.objects.create(**validated_data)
    
    # update item
    def update(self, instance, validated_data):
        # get instances of the data entries
        instance.name = validated_data.get('name', instance.name)
        instance.quantity = validated_data.get('quantity', instance.quantity)

        instance.save() # save updated data
        return instance