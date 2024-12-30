Author: Juan Pablo Torres - jptorres@lafise.com

# Overview
Este es el componente de Header para formularios.

# Props
- config{Object}
Json con la configuración del header

- config.showDisclaimer {Boolean|optional}
Muestra/oculta el disclaimer del header

- config.logo {Object}
Permite configurar los atributos del logo:
alt {String}
src  {String}
title {String}

- config.parent {String|optional}
Permite las opciones banco|seguros

# Ejemplo 
<LandingHeader config={{...}} />