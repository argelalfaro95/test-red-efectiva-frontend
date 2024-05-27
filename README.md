# TEST RED EFECTIVA - FRONTEND

## Clonar el repositorio
    
    git clone

## Instalar dependencias

    npm install

## Iniciar el proyecto

    npm start

## Tecnologías utilizadas

- React JS
- React-Bootstrap
- Fetch
- Docker

## Deploy con Docker (Opcional)

### Crear Imágen Docker 

    docker build -t test-red-efectiva-frontend .

### Ejecutar Imágen Docker

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