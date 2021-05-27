from rest_framework import serializers
from Barbearia.models import Event, Barber, Scheduling
from django.contrib.auth.models import User

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ('star_time',
                  'selected_date')

class BarberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Barber
        fields = ('barberId',
                  'barberName',
                  'barberEmail',
                  'barberPassword', 
                  'barberSchedule')
        extra_kwargs = {'barberPassword' : {'write_only': True, 'required': True}}
    
    def create(self, validated_data):
        barber = Barber.objects.create_barber(**validated_data)
        return barber

class SchedulingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Scheduling
        fields = ('clientName',
                  'clientEmail',
                  'clientCPF',
                  'selected_barber',
                  'appointed_time')
