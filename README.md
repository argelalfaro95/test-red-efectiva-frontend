# Red Efectiva - Prueba Técnica #1 - FRONTEND

Este proyecto es correspondiente a la prueba técnica #1 de `Red Efectiva`. Es un portal desarrollado en `React` y nos muestra una interfaz en la cual podremos realizar búsquedas consumiendo de un [servicio](https://jsonplaceholder.typicode.com) que nos devuelve una lista de correos con `remitente/asunto/mensaje`.

## Requerimientos

`NodeJS 20+`: [Descargar versión v20.14.0](https://nodejs.org/dist/v20.14.0/node-v20.14.0-x64.msi)

`Docker Desktop`: [Descargar Docker Desktop](https://www.docker.com/products/docker-desktop/)

`Git`: [Descargar versión v2.45+](https://git-scm.com/downloads)

## Pasos a seguir

### Clonar el repositorio
    
    git clone https://github.com/argelalfaro95/test-red-efectiva-frontend.git

### Instalar dependencias

    npm install

### Ejecutar el proyecto

    npm start

Al finalizar podremos acceder a nuestro portal a través de los siguientes URLs:

  `Local`: http://localhost:3000
  
  `En nuestra red`: http://192.168.1.5:3000

### Deploy con Docker (Opcional)

Si deseamos podemos construir una imágen `Docker` haciendo uso de la receta que se encuentra en el proyecto.

#### Crear Imágen Docker 

    docker build -t test-red-efectiva-frontend .

#### Ejecutar Imágen Docker creada

    docker run -p 3000:3000 test-red-efectiva-frontend:latest

## Estructura de carpetas
    
    src/
    ├── components/
    ├── |── shared/
    ├── |── |── FooterComponent/
    ├           |── index.css
    ├           |── index.js
    ├── |── |── NavbarComponent/
    ├           |── index.css
    ├           |── index.js
    ├── |── |── SpinnerComponent/  
    ├           |── index.js
    ├── |── TableComponent/
    ├       |── TableFilterComponent/
    ├           |── index.css
    ├           |── index.js
    ├       |── index.js
    ├── services/
    ├── |── utils/
    ├── |── |── TransformService.js
    ├   |── PostsService.js
    ├   |── UsersService.js
    ├── App.css
    ├── App.js
    ├── index.js
    ├── setupTests.js

## Preview APP

### Formulario principal

![Formulario](/public/resource/frontend-01.png)
