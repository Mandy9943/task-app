# Aplicación de Tareas

## Descripción
Una aplicación simple para crear, eliminar y completar tareas usando el localstorage.

## Instalación y Ejecución

A continuación se detallan los pasos necesarios para instalar y ejecutar la aplicación en un entorno local.

### Requisitos Previos
Asegúrate de tener instalados los siguientes requisitos previos en tu sistema:

- Node.js (versión 16.20.0)
- npm (versión 9.7.2)

### Pasos de Instalación

1. Clona el repositorio de la aplicación desde GitHub:

```bash
git clone <url_del_repositorio>
```

2. Accede al directorio de la aplicación:

```bash
cd nombre_de_la_aplicacion
```

3. Instala las dependencias del proyecto utilizando yarn:

```bash
yarn install
```

4. Copia el archivo `.env.example` y renómbralo como `.env`:

```bash
cp .env.example .env
```

5. Abre el archivo `.env` con un editor de texto y actualiza la variable `NEXT_PUBLIC_HOST` con la URL del servidor donde se ejecutará la aplicación.


### Ejecución

Una vez que hayas completado la instalación, puedes ejecutar la aplicación en tu entorno local:

```bash
yarn run dev
```

Esto iniciará el servidor de desarrollo y podrás acceder a la aplicación a través de tu navegador en [http://localhost:3000](http://localhost:3000).



## Soporte

Si encuentras algún problema o tienes alguna pregunta, por favor, crea un issue en el repositorio de GitHub o ponte en contacto con nosotros por correo electrónico.
