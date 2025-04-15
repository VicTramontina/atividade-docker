# Usando a imagem base oficial do Node.js
FROM node:16

# Diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de dependências para dentro do container
COPY package*.json ./

# Instala as dependências da aplicação
RUN npm install

# Copia o restante da aplicação (incluindo o server.js)
COPY . .

# Expondo a porta 3000 para a aplicação
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
