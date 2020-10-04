<h1 align="center">🧁 Docinha</h1>

<p align="center">  
<img src="https://img.shields.io/badge/React-gray?logo=react&style=plastic" />
<img src="https://img.shields.io/badge/Java%20Spring-gray?logo=spring&style=plastic" />
</p>

<br>

Docinha é um projeto utilizando a linguagem Java com o framework Spring e a biblioteca React.js para a o desenvolvimento de um sistema para a criação de receitas.

<p align="center">
  <img src="./github/web.png" />
</p>
<br>

# Como executar o projeto?

## Backend

Antes de tudo, foi utilizado o Docker para servir o banco de dados PostgreSQL, para rodar um container com o PostgreSQL configurado para o projeto, rode os seguintes comandos:

```powershell
# Criando um container

docker run -d --name docinha -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=admin -e POSTGRES_DB=docinha -p 5432:5432 postgres
```
<br>

Para rodar o backend da aplicação, utilize sua IDE favorita (NetBeans, Eclipse, etc) ou outro ambiente que preferir. Entre na pasta `backend` e rode o projeto.

<br>

## Frontend

Para rodar o frotend da aplicação, entre na pasta `frontend` e rode o comando:

```bash
# Instalar as dependências

yarn
```

```bash
# Rodar o projeto

yarn start
```
