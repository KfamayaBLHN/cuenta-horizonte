Author: Fauricio Céspedes Gómez - fcespedes@lafise.com

# Overview

Este componente representa el repetitivo card que se ve en los landings.

# Props

- img {String}
  Aquí se debe colocar el URL de la imagen del Card.

- imgAlt
  Texto alternativo de la imagen, sustituto del atributo "alt" de HTML.

- imgTitle
  Title de la imagen, sustituto del atributo "title" de HTML.

- children {Object}
  Es el contenido que va dentro de la etiqueta <Card>[children]</Card>. En otras palabras, es el contenido del Card.

# Call Example

<Card img="images/gestiones_tarjetas_lafise.webp" imgAlt="Tarjetas de Crédito LAFISE" titleAlt="Tarjetas LAFISE">
    <h3>Titulo</h3>
    <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam non quaerat nihil dignissimos, numquam quas ipsam ex veritatis rerum tenetur, incidunt possimus! Tempore ut quis officia sit aspernatur aliquid esse.
    </p>
</Card>
