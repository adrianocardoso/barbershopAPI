from django.conf.urls import url
from rest_framework import routers
from rest_framework.authtoken.views import ObtainAuthToken
from Barbearia import views

router = routers.DefaultRouter()

urlpatterns =[
    url(r'^barbeiro/$',views.barberApi),
    url(r'^agendamentos/$',views.schedulingApi),
    url(r'^auth', ObtainAuthToken.as_view())
    
    # função de DELETE do bd
    #url(r'^barber/([0-9]+)$',views.barberApi),
    #url(r'^agendamento/([0-9]+)$',views.schedulingApi)
]