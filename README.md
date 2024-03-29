

<h1 align="center">MarvelComics</h1>

![image](https://github.com/haliercesr/MarvelComics/assets/115671323/2e62fc78-9e0a-47a0-8265-abf1dd87522c)

En esta SPA consta de una Landing Page, Home Page, Detail Page y Form Page. Las tecnologías utilizadas fueron React, Redux, NodeJS, Express y Sequelize.

Para este proyecto se reemplazo Create React App por Vite, para mejorar el rendimiento.

El flujo es el siguiente: El frontend se comunica con un servidor BBF (BACK FOR FRONT). Este servidor se programó en Express y filtra la información que se consume desde una API externa de Marvel Comics y la devuelve al frontend. También puede guardar datos según se solicite en una base de datos relacional. El servidor y la base de datos se comunican a través del ORM Sequelize. La base de datos está hecha con PostgreSQL y pgAdmin. Para probar el servidor, se utilizó el software Insomnia.

Cuenta con un diseño adaptable para moviles,tablets y pc.

## Tabla de Contenidos

- [Funcionalidades](#funcionalidades)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Capturas de Pantalla](#capturas-de-pantalla)
- [Guía de Uso](#guía-de-uso)
- [Cómo Contribuir](#cómo-contribuir)
- [Licencia](#licencia)

## Funcionalidades

**1.** Búsqueda de personajes por nombre: Los usuarios pueden ingresar el nombre del personaje y obtener información sobre el mismo.

**2.** Al hacer click sobre una carta obtienen los comics del personaje y al hacer click en la imagen de un comic pueden ver mas detalles.

**3.** Pueden guardar el personaje o sus comics haciendo click en la estrella.

**4.** Los personajes que son favoritos se guardan en la base de datos para poder verlos despues.

**5.** Barra de Navegación: Una barra de navegación proporciona enlaces a las diferentes secciones de la aplicación, como la página de inicio, favoritos, home y detalles de un comic.

**6.** Filtros combinados: falta terminarlos, un filtro que ordena por fecha de publicacion.

**7.** Rutas y Enrutamiento: Se utiliza React Router para administrar y facilitar la navegación entre diferentes páginas y componentes de la aplicación.

**8.** Gestión de Estado con Redux: Redux se utiliza para gestionar el estado global de la aplicación, como guardar informacion recibida del servidor para usarla en el front ya sea personajes, busqueda por nombre de personajes, comics y mas.

**9.** Diseño Responsivo: La interfaz está diseñada para adaptarse a diferentes tamaños de pantalla y dispositivos, asegurando una experiencia de usuario consistente.

**10.** Estilos Personalizados: Solo se utilizo CSS , los estilos CSS personalizados se aplican para crear una apariencia agradable y coherente en toda la aplicación.

**11.** Interacción con API: La aplicación se conecta la API externa de Marvel Comics para obtener información actualizada sobre cada conductor.

## Tecnologías Utilizadas

- Vite
- React
- React Router
- Redux
- Axios
- CSS
- NodeJS
- Express
- PostgreSQL
- Sequalize
- Promises
- AsyncAwait

## Capturas de Pantalla

 <img src="https://github.com/haliercesr/MarvelComics/assets/115671323/be3ac9bd-977d-423d-addd-82215f4484be" alt="alt text" width=225 height=400>

 <img src="https://github.com/haliercesr/MarvelComics/assets/115671323/c22f27dc-6413-46fa-a95a-6cae28a83a9b" alt="alt text" width=225 height=400>

 <img src="https://github.com/haliercesr/MarvelComics/assets/115671323/01e53e9a-7cd1-4cf6-8d49-5bf924cf1e9f" alt="alt text" width=225 height=400>

 <img src="https://github.com/haliercesr/MarvelComics/assets/115671323/81f18aef-820e-4aff-bfb5-33731d5db2a1" alt="alt text" width=225 height=400>

![image](https://github.com/haliercesr/MarvelComics/assets/115671323/069bf555-ed86-4c19-9817-7fc2e6bd125c)


![image](https://github.com/haliercesr/MarvelComics/assets/115671323/74bf8054-2186-4a24-98a9-f434fff9f97c)







## Guía de Uso

**1.** Visita [https://marvel-comics-vqta.vercel.app/](https://marvel-comics-vqta.vercel.app/) en tu navegador.

<p align="center">
  <img src="https://github.com/haliercesr/MarvelComics/assets/115671323/85521fa7-5351-4cda-b35b-7b1e5445228c" alt="Inicio" width=400 height=200>
</p>


**2.** Para ver los comics de algun personaje debe hacer click en una card o insertar el nombre en el buscador

<p align="center">
  <img src="https://github.com/haliercesr/MarvelComics/assets/115671323/9df5ce6e-387b-40ad-aeb3-4dbe01b968b8" alt="Inicio" width=400 height=200>
</p>


**3.** Para ver los detalles de un comic debe hacer click en la imagen, tambien se puede seleccionar como favorito haciendo click en la estrella.

<p align="center">
  <img src="https://github.com/haliercesr/MarvelComics/assets/115671323/2935c44d-9203-4f1c-853c-4a7e85ba67a9" alt="Inicio" width=400 height=200>
</p>


**4.** Para ver sus personajes favoritos debe ir a la estrella superior izquierda, al hacer click en uno de sus favoritos puede ver los comics que selecciono como favoritos

<p align="center">
  <img src="https://github.com/haliercesr/MarvelComics/assets/115671323/bcb26a3b-0f28-4bb5-9cba-ed586592cf6a" alt="Inicio" width=400 height=200>
</p>


**5.** Disfruta buscando a tu conductor favorito.

## Cómo Contribuir

Si quieres contribuir a este proyecto, sigue estos pasos:

1. Haz un fork de este repositorio.
2. Crea una rama con tu nueva funcionalidad (`git checkout -b nueva-funcionalidad`).
3. Realiza tus cambios y realiza commits (`git commit -m 'Añadir nueva funcionalidad'`).
4. Sube tus cambios a tu fork (`git push origin nueva-funcionalidad`).
5. Crea un pull request en este repositorio.

## Licencia

Este proyecto está bajo la Licencia [---](----).
