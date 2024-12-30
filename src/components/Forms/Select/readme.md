autor: Diego Naranjo - dnaranjo@lafise.com

# overview

Componente para ser utilizados en de formularios dentro de landing pages.

# Descripción

El Select es usado para desplegar varias opciones y que el usuario escoga la más adecuada. Las opciones son enviadas como parámetro para que el select las recorra y las vaya desplegando según su orden, nombre y cantidad. Cuando el usuario seleccione una opción, el componente le aplicará una clase llamada 'selected' para indicar que fue seleccionada y que será la opción que el formulario recibirá. 



# Ejemplo
```
<Select
  name="hola"
  label="este es el label"
  errorStatus={false}
  handleChange={(value)=> console.log('value', value)}
  handleFocus={ () => console.log('handle focus')}
  value="hola"
  options={[
    {value:"value1", label:"Es es el label 1"},
    {value:"value2", label:"Es es el label 2"}
  ]}
  feedback="Mensaje feedback"
  errorMessage="mensaje de error"
/>
``` 
