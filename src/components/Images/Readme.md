# Componente Images
Es un componente que optimiza la creación de la etiqueta img agregando las propiedades necesarias. También se encarga de mostrar las imagenes en 1x y 2x de ser necesario.


# Props
- name: String
es el nombre o key usado en el Objeto source

- siteUrl: String
Es una variable del ENV de NEXT, se suguere que sea NEXT_PUBLIC_SITEURL, e indica la url que se usará en sandbox o producción

- source: Object
Debe contener la siguiente estructura :
{
  "key": {
    "src": String,
    "src_2x" String|Opcional
    "alt": String,
    "title": String,
    "w": Number,
    "h": Number
  },
  ...
}

Su descripción es la siguiente:
src: Es el la ubicación de la imagen en @1x
src_2x: Es la ubicación de la imagen en @2x
alt: Alt Tag de la imagen
title: Title Tag de la imagen
w: Es el Width de la imagen
h: Es el Heigth de la imagen


# Ejemplo:
<Images source={source} siteUrl="/" name="Home_cardTarjetaCredito" />
