from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

from Barbearia.models import Event, Barber, Scheduling
from Barbearia.serializers import EventSerializer, BarberSerializer, SchedulingSerializer

# Create your views here.
class BarberViewSet(viewsets.ModelViewSet):
    authentication_classes = (TokenAuthentication,)
    permissions_classes = (IsAuthenticated,)
# Manipulação dos dados do Barbeiros
@csrf_exempt
def barberApi(request,id=0):
    if request.method =='GET':
        barber = Barber.objects.all()
        barber_serializer = BarberSerializer(barber, many=True)
        return JsonResponse(barber_serializer.data, safe=False)
    
    elif request.method =='POST':
        barber_data = JSONParser().parse(request)
        barber_serializer = BarberSerializer(data=barber_data)
        if barber_serializer.is_valid():
            barber_serializer.save()
            return JsonResponse("Cadastro realizado com sucesso!", safe=False)
        return JsonResponse("Não foi possível completar o cadastro.", safe=False)

# Metodos para atualizar e deletar prontos para um futuro
    # elif request.method =='PUT':
    #     barber_data = JSONParser().parse(request)
    #     barber = Barber.objects.get(barberId = barber_data['barberId'])
    #     barber_serializer = BarberSerializer(barber, data=barber_data)
    #     if barber_serializer.is_valid():
    #         barber_serializer.save()
    #         return JsonResponse("Atualizado com sucesso!", safe=False)
    #     return JsonResponse("Não foi possível atualizar o cadastro.", safe=False)

    # elif request.method =='DELETE':
    #     barber = Barber.objects.get(barberId = id)
    #     barber.delete()
    #     return JsonResponse("Apagado com sucesso!", safe=False)

# Manipulação do calendário
@csrf_exempt
def eventApi(request,id=0):
    if request.method =='GET':
        event = Event.objects.all()
        event_serializer = EventSerializer(event, many=True)
        return JsonResponse(event_serializer.data, safe=False)
    
    elif request.method =='POST':
        event_data = JSONParser().parse(request)
        event_serializer = EventSerializer(data=barber_data)
        
# Manipulação dos agendamentos
@csrf_exempt
def schedulingApi(request,id=0):
    if request.method =='GET':
        scheduling = Scheduling.objects.all()
        scheduling_serializer = SchedulingSerializer(scheduling, many=True)
        return JsonResponse(scheduling_serializer.data, safe=False)
    
    elif request.method =='POST':
        scheduling_data = JSONParser().parse(request)
        scheduling_serializer = SchedulingSerializer(data=scheduling_data)
        if scheduling_serializer.is_valid():
            scheduling_serializer.save()
            return JsonResponse("Agendamento realizado com sucesso!", safe=False)
        return JsonResponse("Não foi possível realizar o agendamento.", safe=False)