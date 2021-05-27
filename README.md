# BarbershopAPI

Para esse projeto foram utilizados o Django 2, Angular 12 e Python 3 com SQLite

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

## Dificuldades
Python não é o meu forte e eu passei mais tempo estudando como fazer as coisas do que de fato colocando a mão na massa. No fim o tempo ficou curto. Mas valeu a experiência, tanto as dores de cabeça como as pequenas conquistas.

Apesar de a lógica estar toda aí o projeto está longe de terminar. Existe um problema com o método POST onde a base de dados recusa a inserção de inserções. A logica de autenticação está funcionando, mas novamente só dá para testar se fizer o input direto pelo SQLiteStudio. Além disso o layout foi pouco ou quase nada trabalhado, só peguei o bootstrap para deixar a coisa mais apresentável.

## Próximos passos
Ainda vou trabalhar nele para deixar o projeto liso. E pedir uma ajuda pros universitários.

## Conclusão
Esse projeto me fez perceber que ainda preciso estudar muito ainda. Talvez em 1 mês a história fosse outra. Eu percebi que a linguagem se alinha bem ao que estava buscando no Ruby. E pode ser que venha mesmo a se tornar a minha linguagem principal num futuro próximo :)
