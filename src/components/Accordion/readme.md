Author: Fauricio Céspedes Gómez - fcespedes@lafise.com

# Overview

Este componente es un acordeón dinámico

# Props

- children {Object}
  Al llamar al componente <Accordion></Accordion> ingresaremos dentro de él sus sub-componentes <Accordion.Item>, los cuales representan cada acordeón del componente.

# Accordion.Item props

- label {String}
  Es el texto que va en el header del acordeón.

- index {int}
  Es el índice que identifica a cada acordeón, preferiblemente iniciarlo en 0.

- children {Object}
  Es el contenido que va en el cuerpo del acordeón.

# Call Example

<Accordion>
    <Accordion.Item label="¿Chatear con Lia tiene algún costo?" index={0}>
        <p>
        En lo absoluto, Lia está disponible 24/7 para nuestros clientes sin ningún costo, ¡escríbele las veces que quieras!
        </p>
    </Accordion.Item> 
    <Accordion.Item label="¿Puedo transferir dinero con Lia?" index={1}>
        <p>
        Por el momento, no puedes hacer transacciones ni transferencias directamente en Lia.
        </p>
    </Accordion.Item> 
</Accordion>
