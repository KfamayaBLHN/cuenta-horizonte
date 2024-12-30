Autor: Diego Naranjo Meza - dnaranjo@lafise.com 

# Overview

Los componentes básicos son aquellos que deben ir dentro de todos los proyectos. 

Tanto el componente del footer, como el del header, funcionan de la misma manera. Ambos se encargan de importar el footer/header al proyecto y son utilizados solamente en producción. 

# props

El parámetro que ambos reciben es props.filename. Este filename es un string y es la url del archivo del footer en el servidor. 

# Ejemplo

<Footer filename="/cdn/basics/footer-seguros/footer-slcr.html"/>