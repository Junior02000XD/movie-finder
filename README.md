# MovieFinder

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.0.2.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

# Movie Finder - Aplicación Angular

Esta es una aplicación de ejemplo desarrollada en Angular para buscar y ver detalles de películas utilizando la API pública de TMDB (The Movie Database).

---

* Funcionalidades

- Búsqueda de películas por nombre.  
- Paginación de resultados.  
- Visualización de detalles de cada película, incluyendo poster, fecha de estreno y rating.  
- Manejo de errores con notificaciones estilo Toast.  
- Indicador de carga (spinner) mientras se realizan las solicitudes HTTP.  
- Uso de servicios e inyección de dependencias en Angular.  

---

* Requisitos

- Node.js ≥ 18  
- Angular CLI ≥ 16  
- Acceso a la API de TMDB con tu `API Key`  

---

* Instalación

1. Clonar el repositorio:

   git clone `URL_DEL_REPOSITORIO`

2. Instalar dependencias:

   npm install

3. Configurar la API Key en `environment.ts`:

   environment.apiReadToken = `TU_API_KEY_TMDb`  

---

* Uso con proxy (recomendado)

Debido a políticas de CORS de TMDB, no se debe usar `ng serve` directamente.  
Se debe usar el comando con el proxy configurado:

   `ng serve --proxy-config proxy.conf.json`

El archivo `proxy.conf.json` redirige las solicitudes a la API de TMDB evitando errores de CORS.  

---

* Estructura del proyecto

- /src/app/core/services → Servicios para consumo de API  
- /src/app/core/interceptors → Interceptor HTTP para manejo de tokens y errores  
- /src/app/shared/components → Componentes compartidos (LoadingSpinner, Toasts)  
- /src/app/features/movie-search → Componente de búsqueda de películas  
- /src/app/features/movie-detail → Componente de detalles de películas  

---

* Notas

- Todos los componentes son `standalone`.  
- Se utiliza Bootstrap 5 para estilos y toasts.  
- Manejo de errores centralizado en interceptor con notificaciones.  
- El spinner se muestra mientras se cargan los datos.  
- Para probar correctamente, se requiere ejecutar con el proxy habilitado.  

---

* Referencias

- [Angular Documentation](https://angular.io/docs)  
- [TMDB API Documentation](https://developers.themoviedb.org/3)  
- [Bootstrap 5](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
