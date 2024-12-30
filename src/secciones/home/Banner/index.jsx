import Footage from "./Footage"
export default props => {

  return <section className="banner py-5 py-lg-0" id="banner">
    <div className="container-fluid">
      <div className="row align-items-lg-center">
        <div className="col-12 col-md-6 text-white text-center pb-4 pb-md-0 text-md-start text-box">
          <h1>
            Abre tu Cuenta Digital en minutos
          </h1>
          <p className="lead fw-semibold py-3">
          Sin complicaciones y sin tener que ir al banco,&nbsp;<br className="d-none d-lg-initial" />
          abre tu cuenta digital hoy desde tu celular  
          </p>
          <div>
            <a className="btn btn-light btn-lg">¡Quiero mi cuenta!</a>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <Footage />
        </div>
      </div>
    </div>
  </section>
}
