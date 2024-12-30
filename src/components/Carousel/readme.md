Author: Fauricio Céspedes Gómez - fcespedes@lafise.com

# Overview

Este componente se comporta como carousel en móviles, cuando se adapta a desktop muestra lo cards normales.

## Props

- responsive {Object}
Este objeto se encarga de llevar la configuración de los breakpoints, tantos como sea necesario, en este ejemplo sólo tendremos móvil, tablet y desktop. El objeto debe lucir de la siguiente manera:

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1
  }
};

- hasArrows {Boolean}
Determina si el carousel lleva o no flechas.

- isDesktopCarousel {Boolean}
En caso de ser false sólo será carousel en móvil, en desktop serán cards normales.

- autoPlay {Boolean}
Determina si automaticamente sa pasan los elementos del carousel, cada cinco segundos.

- isDesktopCarousel {Boolean}
En caso de ser true el componente será un carousel tanto en escritorio como en móvil.

- children {Object}
Son los elementos del carousel, por ejemplo pueden ser cards, cada elemento debe ir dentro de, por ejemplo, un <div>

## Call Example
<Carousel
  responsive={responsive}
  hasArrows={true}
  isDesktopCarousel={false}
  autoPlay={false}
>
    <div>
       [Contenido del elemento de carousel] 
    </div>
    <div>
       [Contenido del elemento de carousel] 
    </div>
    <div>
       [Contenido del elemento de carousel] 
    </div>
</Carousel>

## Docs
https://www.npmjs.com/package/react-multi-carousel
