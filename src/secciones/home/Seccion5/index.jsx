import Images from "@/components/Images"

export default props => {

  const sources = {
    Seccion5: {
      "src": "/imagenes/pics/IMG-secondary_Requisitos_BLH-Section5_Desktop_01@1x.webp",
      "src_2x": "/imagenes/pics/IMG-secondary_Requisitos_BLH-Section5_Desktop_01@2x.webp",
      "alt": "Ejecutivo leyendo en su celular los requisitos para aperturar su Cuenta Horizonte",
      "title": "",
      "w": 500,
      "h": 500
    }
  }
  return <section className="section-5 pt-6 pb-6" id="requisitos">
    <article className="container-fluid">
      <div className="row align-items-end align-items-xl-center flex-md-row">
        <div className="col-12 col-md-5">
          <h2 className="h2">Requisitos para abrir tu Cuenta Horizonte</h2>
          <ul className="list-unstyled list-bullet-check mb-0">
            <li>DNI o pasaporte vigente</li>
            <li>Carnet de residencia, en caso de ser extranjero</li>
            <li>Apertura desde L15,000 o $700</li>
          </ul>
        </div>
        <div className="col-12 col-md-6 text-center imag pt-2">
          <Images className="img-section-5" alt="Ejecutivo leyendo en su celular los requisitos para aperturar su Cuenta Horizonte" source={sources} name="Seccion5"/>
        </div>
      </div>
    </article>
  </section>
}