# Usa una imagen base de Node.js
FROM node:alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de tu proyecto al contenedor
COPY . .

# Instala las dependencias del proyecto
RUN npm install

# Expone el puerto 3000 para que la aplicación React pueda ser accedida
EXPOSE 3000

# Comando para iniciar la aplicación React
CMD ["npm", "start"]