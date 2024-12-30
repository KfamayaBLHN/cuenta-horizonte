# COMPONENTE: TABS

El componente de tabs permite navegar entre secciones, mostrando así, información o elementos de acuerdo al tab seleccionado.

El componente se divide en las siguientes secciones: <Tabs></Tabs>, <TabList></TabList>, <Tab></Tab>, <TabPane></TabPane> y <TabContent></TabContent>.

La sección <Tabs></Tabs> es la que encierra todo. Dentro de esas etiquetas van el resto, permitiendo así, el funcionamiento correcto del componente.

Las secciones <TabList> y <Tab> están relacionadas. <TabList> se encarga de generar IDs de acuerdo a la longitud del props.children. Además de eso, retorna una etiqueta <ul></ul> donde van a ir todas las <Tab>. La etiqueta <Tab> recibe props y compara si es igual a 0 para determinar si está o no está activa. A la hora de retornar etiquetas, retorna un <li></li> por cada Tab creada, junto a su correspondiente href, id y clase.

<TabPane></TabPane> controla que mostrar o no, ya sea mediante las tabs y su efecto fade para cambiar entre tabs o mediante un acordion vertical mediante la propiedad collapse.

Finalmente, <TabContent></TabContent>, se encarga de crear el acordion en el que TabPane va a estar ubicado.

Un ejemplo para utilizar el componente es el siguiente:

<Tabs fill>
    <TabPane label="Requisitos generales" active={true} name="tab-1">
        ...contenito tab 1
    </TabPane>
    <TabPane label="Documentación" name="tab-2">
        ...contenido tab 2
    </TabPane>
</Tabs>

El componente <Tab> y <TabPane> reciben como parámetros la variable num={N}. Esa variable es recibida como prop u se utiliza en prop.num para identificar cuál tab se está mostrando y los IDs correspondientes de cada tab. 

La forma de importar todas las secciones del componente es la siguiente: "import { Tabs, TabList, Tab, TabContent, TabPane, } from "../../components/Tabs/Tabs" (o la ruta corracta)" ;

