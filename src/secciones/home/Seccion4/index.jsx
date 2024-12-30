import Images from "@/components/Images"

export default props => {

  const sources = {
    EjecutivosSeccion: {
      "src": "/imagenes/pics/IMG-secondary-_Asesores_BLH-Section4_Desktop_01@1x.webp",
      "src_2x": "/imagenes/pics/IMG-secondary-_Asesores_BLH-Section4_Desktop_01@2x.webp",
      "alt": "Nuestros asesores listos para dar una atención personalizada",
      "title": "",
      "w": 520,
      "h": 520
    }
  }
  return <section className="section-4" id="asesores">
    <article className="container-fluid">
      <div className="row align-items-end align-items-xl-center flex-column-reverse flex-md-row">
        <div className="col-12 col-md-6 imag">
          <Images className="img-section-4" alt="Nuestros asesores listos para dar una atención personalizada" source={sources} name="EjecutivosSeccion"/>
        </div>
        <div className="col-12 col-md-5 pb-1">
          <h2 className="h2">Recibe atención personalizada</h2>
          <p className="pb-1 pt-1 p">
            Llena tus datos en el formulario y uno de nuestros 
            agentes se comunicará contigo para asesorarte en el proceso de apertura
          </p>
        </div>
      </div>
    </article>
  </section>
}