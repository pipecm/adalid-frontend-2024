# Sitio Web Hospital San Itario
Repositorio que contiene la capa de front-end del sitio web del Hospital San Itario.

## Alumno
Felipe Cárdenas Molina

## Estructura
El sitio web se encuentra estructurado de la siguiente forma:

```
├── README.md
├── contact.html
├── images
│   ├── hospital_logo.png
│   ├── laboratory.webp
│   ├── location.png
│   ├── maternity.jpg
│   ├── medico_01.jpg
│   ├── medico_02.jpg
│   ├── medico_03.jpg
│   ├── medico_04.webp
│   ├── radiology.jpg
│   └── urgency.webp
├── index.html
├── staff.html
└── styles
    └── style.css
```

|Directorio|Contenido                   |
|----------|----------------------------|
|/ (raíz)  | Ficheros HTML              |
|images    | Imágenes del sitio         |
|styles    | Ficheros de estilos CSS    |

## Despliegue local
Para desplegar el sitio en su ambiente local, se debe realizar lo siguiente:

1. Clonar el repositorio del sitio web:
```
git clone git@github.com:pipecm/adalid-frontend-2024.git
```

2. Acceder a la carpeta recientemente descargada:
```
cd adalid-frontend-2024
```

3. Ejecutar el comando para instalar las dependencias de Bootstrap:
```
npm install
```

4. Ejecutar el comando que imprime el directorio actual:
```
pwd
```

5. Copiar el resultado obtenido, abrir un browser y pegar la ruta obtenida, seguido de `/index.html`, por ejemplo:

```
/home/myself/development/adalid-frontend-2024/index.html
```

Si todo lo anterior se realizó correctamente, se debería visualizar el sitio web como en la imagen siguiente:

![Sitio web](images/website.png "Sitio web")

## Vistas
|Página                         |Funcionalidad                            |
|-------------------------------|-----------------------------------------|
|[index.html](index.html)       |Home del sitio, contiene la información principal del hospital (misión, visión, servicios, etc.                   |
|[staff.html](staff.html)       |Equipo médico del hospital, especialidades y experiencia relevante.                                 |  
|[contact.html](contact.html)   |Formulario de contacto                 |

## Aplicación de SASS y BEM
Con el fin de presentar de forma más ordenada los estilos de los diversos elementos del sitio web, se renombraron varios de los estilos usando la convención BEM (Bloque-Elemento-Modificador). Asimismo, se generó el CSS por medio del preprocesador SASS, usando lenguaje SCSS en cada componente.

## Estructura SASS
|Componente     |Descripción                                 |
|---------------|--------------------------------------------|
|[base](styles/components/_base.scss)|Contiene los estilos base del sitio completo|
|[contact](styles/components/_contact.scss)|Contiene los estilos para el formulario de contacto y mapa de ubicación|
|[footer](styles/components/_footer.scss)|Contiene los estilos para el footer (links rápidos, info de contacto y copyright)|
|[header](styles/components/_header.scss)|Contiene los estilos de la barra superior, logo y links|
|[services](styles/components/_services.scss)|Contiene los estilos aplicados a la grilla de servicios del hospital|
|[staff](styles/components/_staff.scss)|Contiene los estilos aplicados a la grilla de médicos del hospital|
|[testimonials](styles/components/_testimonials.scss)|Contiene los estilos de los testimonios de los pacientes|
|[welcome](styles/components/_welcome.scss)|Contiene los estilos de la sección de bienvenida, misión y visión|
|[mixins](styles/components/_mixins.scss)|Contiene los mixins aplicados en el sitio|

## Mixins
Se creó un mixin que setea el tamaño y layout de los elementos de las grillas de servicios del hospital y del equipo médico, usando como parámetros su altura y ancho.

## Integración de Bootstrap
Con el fin de darle una apariencia más profesional al sitio y para efectos de aprendizaje de la herramienta, se aplicó Bootstrap en los siguientes componentes:
- Botones de reserva de cita y envío de formulario
- Tarjetas "Misión" y "Visión"
- Formulario de contacto


## Changelog
2024-11-09  Entrega ejercicio práctico Nº 1

2024-11-10  Entrega ejercicio práctico Nº 2

2024-11-11  Entrega ejercicio práctico Nº 3


© 2024 Hospital San Itario. Todos los derechos reservados