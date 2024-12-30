# Overview

Este componente indica ubicación del sitio, generalmente va justo después del banner del sitio web.

# Props

- items {Object}
  Este objeto almacena los sitios 'padre' de nuestro sitio actual, su clave es el nombre del sitio y su valor la URL.
  El último objeto de items de este ejemplo lleva como URL un '#' debido a que es la página actual.

const items = [
{label: "Inicio", url: 'https://www.lafise.com/blb'},
{label: "Banca personal", url: 'https://www.lafise.com/blb/banca-personal'},
{label: "Tarjetas", url: 'https://www.lafise.com/blb/banca-personal/tarjetas'},
{label: "Beneficios", url: '#'}
];

# Call Example

<Breadcrumbs items={items}/>
