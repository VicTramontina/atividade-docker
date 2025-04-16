# atividade-docker

Este projeto é uma aplicação Node.js com Postgres usando Docker e Docker Compose.

## Estrutura do projeto

* `meu_projeto_docker/.env`: Arquivo de configuração de variáveis de ambiente.
* `meu_projeto_docker/app/package.json`: Arquivo de configuração do Node.js, contendo as dependências e scripts.
* `meu_projeto_docker/app/server.js`: Código do servidor Node.js que se conecta ao banco de dados Postgres.
* `meu_projeto_docker/docker-compose.yml`: Arquivo de configuração do Docker Compose para orquestrar os serviços.
* `meu_projeto_docker/Dockerfile`: Arquivo de configuração do Docker para criar a imagem do contêiner.

## Como executar o projeto

1. Clone o repositório.
2. Navegue até o diretório `meu_projeto_docker`.
3. Crie um arquivo `.env` com as variáveis de ambiente necessárias, conforme o exemplo em `meu_projeto_docker/.env`.
4. Execute o comando `docker-compose up --build` para iniciar os serviços.
5. Acesse `http://localhost:8080` no seu navegador para ver a aplicação em execução.

## Dependências

* Node.js
* Express
* Postgres
* Docker
* Docker Compose

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo `LICENSE` para obter mais informações.
