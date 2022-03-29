# BarbershopAPI

Esse é um esboço para o projeto da barbearia.
Foram utilizados o Django 2, Angular 12 e Python 3 com SQLite

Para testar os métodos GET e POST pode ser utilizado o programa Postman e para acessar a base de dados o SQLiteStudio é uma boa opção

## Uso

Para rodar o Django o primeiro passo é rodar o ambiente barbenv. Para tanto acesse a pasta da API e execute no terminal:

```bash
barbenv\Scripts\activate
```
Uma vez no ambiente, execute:

```bash
python manage.py runserver
```
E você poderá ver a landpage do Django em http://127.0.0.1:8000/

### Para o ambiente do Angular

Acessar a pasta frontend com "cd frontend" e executar:

```bash
ng serve
```

## Uso

O projeto pode ser acessado pelo endereço:

#### http://localhost:4200/

Clicando no botão agendar horário ou indo no endereço 
#### http://localhost:4200/agendamentos

O usuário poderá reservar um horário.

O botão Acessar Painel leva a uma tela (http://localhost:4200/barbeiro) onde o profissional poderá fazer o login (http://localhost:4200/auth) ou se registrar (http://localhost:4200/adicionar-barbeiro)

## Em Andamento

## Empresa Solicitante: Stairs Digital
