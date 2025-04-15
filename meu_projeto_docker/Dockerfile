# Usando a imagem base oficial do Node.js
FROM node:16

# Instalando wait-for-it (uma ferramenta para esperar que o serviço esteja disponível)
RUN apt-get update && apt-get install -y netcat

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia os arquivos de dependências para dentro do contêiner
COPY app/package*.json ./

# Instala as dependências da aplicação
RUN npm install

# Copia o restante dos arquivos da aplicação (incluindo server.js)
COPY app/ .

# Expondo a porta 3000 para que a aplicação fique acessível
EXPOSE 3000

# Comando para aguardar o MySQL e, em seguida, iniciar a aplicação
CMD ["sh", "-c", "until nc -z -v -w30 db 3306; do echo 'Waiting for MySQL...'; sleep 5; done; npm start"]
