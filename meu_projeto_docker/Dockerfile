# Imagem base do Node.js
FROM node:16-slim

# Diretório de trabalho dentro do container
WORKDIR /app

# Copiar o arquivo de dependências
COPY app/package.json ./ 

# Instalar dependências
RUN npm install

# Copiar o código da aplicação
COPY app/ /app/

# Expõe a porta onde a aplicação vai rodar
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["node", "app.js"]
