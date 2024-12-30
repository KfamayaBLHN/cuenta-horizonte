Autor: Diego Naranjo Meza - dnaranjo@lafise.com 

# Overview

Este componente genera un <iframe> para poder desplegar el jotform dentro del HTML. 

# props

Las props que el componente recibe son 3: ID, title y height. El ID es el id del formulario, el cuál se utiliza para desplegar el jotform que corresponda a la página en la que se esté desplegando. El title es el título del formulario y el heigth es para el estilo de altura que va a tener el formulario, normalmente debe ir en 100. 

# Ejemplo

*Este objeto es el que trae los props para que el formulario los reciba

const formOptions = {
    ID: "222785108305858",
    title: "",
    height: "100",
  };

*Así se llama dentro del código

<JotformContainer.Form config={formOptions}>
    codigo
</JotformContainer.Form>

*Se utiliza el .Form al final para asegurarse de llamar al <iframe> donde va el formulario. De esta manera, se llama, tanto al contenedor, como al formulario.