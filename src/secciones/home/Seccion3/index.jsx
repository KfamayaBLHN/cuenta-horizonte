import Images from "@/components/Images"
export default props => {
  const site_url = process.env.NEXT_PUBLIC_SITE_URL;
  
  const sources = {
    tarjeta2: {
      "src": "/imagenes/footage-4/IMG_Secondary_Section03_Family_Card_CH_Desktop_BLHN_Sep_01@1x.webp",
      "src_2x": "/imagenes/footage-4/IMG_Secondary_Section03_Family_Card_CH_Desktop_BLHN_Sep_01@2x.webp",
      "alt": "Familia acumulando doble punto por sus compras utilizando su Tarjeta de Débito Dorada",
      "title": "",
      "w": 550
    }
  }
  return <section className="section-3 pt-3 pb-3">
    <article className="container-fluid">
      <div className="row align-items-center align-items-xl-center flex-md-row">
        <div className="col-12 col-md-5 pb-5">
          <h2 className="h2">Doble punto con tu Tarjeta de Débito Dorada</h2>
          <p className="pb-5 pt-1 p">
            Diseñada para que disfrutes de recompensas increíbles, 
            al acumular doble punto por cada dólar de consumo
          </p>
          <a href='https://www.lafise.com/blh/banca-personal/cuenta-horizonte/solicitud-en-linea' className="btnsection3">¡Descúbrela aquí!</a>
        </div>
        <div className="col-12 col-md-6 imag">
          <Images className="img-section-3" alt="Tarjeta" source={sources} name="tarjeta2"/>
        </div>
      </div>
    </article>
  </section>
}