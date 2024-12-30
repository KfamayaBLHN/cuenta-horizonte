import React from 'react';
import styles from './styles.module.scss';


const Calculadora = props => {
  return <section className={`py-5 py-12 ${styles.calc}`}>
    <div className="container-fluid">
      {props.children}
    </div>
  </section>
}

const Header = props => {
  return <div className="row justify-content-center pb-6">
    <div className="col-12 col-md-10 text-md-center">
      {props.children}
    </div>
  </div>
}

const Disclaimer = props => {
  return <div className="container-fluid animated-item n3">
    <div className="row">
      <div className="col-12 pt-6">
        {props.children}
      </div>
    </div>
  </div>
}

const Inputs = props => {
  return <div className="col-md-auto col-md-6 pb-50 pb-md-0 col-lg-5">
    {props.children}
  </div>
}

const Outputs = props => {
  return <div className="col-md-auto col-md-6 offset-lg-1">
    <div className={`box-info text-center h-100 ${styles.results_container} py-5 py-md-0 mt-5 mt-md-0`}>
      <div className="d-flex justify-content-center h-100">
        <div className={`align-self-center ${styles.center_box} px-1 px-sm-5 px-md-1 px-lg-5`} >
          {props.children}
        </div>
      </div>
    </div>
  </div>
}

const Resultados = props => {
  return <div className={`pt-1 d-flex ${styles.resultados_table_container} justify-content-center`}>
    {props.children}
  </div>
}




const Container = props => {
  return <div className="row justify-content-center">
    {props.children}
  </div>
}

const Collapse = props => {
  return <>
    <div>
      <button className={styles.btn_collapse} type="button" data-bs-toggle="collapse" data-bs-target={`#${props.id}`} aria-expanded="false" aria-controls={props.id}>
        {props.label}
      </button>
      <div className="collapse" id={props.id}>
        {props.children}
      </div>
    </div>
  </>
}



Calculadora.Header = Header;
Calculadora.Disclaimer = Disclaimer;
Calculadora.Container = Container;
Calculadora.Inputs = Inputs;
Calculadora.Outputs = Outputs;
Calculadora.Collapse = Collapse;
Calculadora.Resultados = Resultados;
export default Calculadora;