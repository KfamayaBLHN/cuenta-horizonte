import React from "react";
import Accordion from "@/components/Accordion"

export default props => {
  return <section className="section-6">
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 text-md-center">
          <h2 className="h2 pb-5">¿Tienes dudas?... Aquí te apoyamos</h2>
        </div>
      </div>
        
      <div className="questions">
      <div className="row">
        <div className="col-12 col-md-10">
        <Accordion>

            <Accordion.Item class="title" label="¿Cuál es el monto de apertura de la Cuenta Horizonte?" index={0}>
              <p>El monto mínimo para abrir una Cuenta Horizonte es de L15,000 o $700.</p>
            </Accordion.Item>

            <Accordion.Item label="¿Cómo puedo acumular puntos con la Cuenta Horizonte?" index={1}>
              <p>Al abrir tu Cuenta Horizonte, recibe una Tarjeta de Débito Dorada con la cual podrás acumular el doble de puntos, 
                por cada compra realizada en cualquier comercio físico o en línea.</p>
            </Accordion.Item>

            <Accordion.Item label="¿Cuánto es lo máximo de puntos que puedo acumular al mes?" index={2}>
              <p>Puedes acumular un máximo de 10,000 puntos al mes, que podrás canjear para 
                pagar tu Tarjeta de Crédito o usarlos como cashback en tu Cuenta Horizonte.</p>
            </Accordion.Item>

            <Accordion.Item label="¿Tengo retiros gratis en ATM?" index={3}>
              <p>Con tu Tarjeta de Débito Dorada tienes 6 retiros gratis al mes en la red de ATM Visa.</p>
            </Accordion.Item>
            
            <Accordion.Item label="¿Qué gestiones puedes hacer desde Bancanet?" index={4}>
              <p>Bancanet es nuestra banca electrónica, donde podrás realizar gestiones bancarias desde tu celular o computadora.
              <br></br>Entre las gestiones que puedes realizar están:</p>
              <ul>
                <li>Consultar saldos y movimientos diarios e históricos</li>
                <li>Realizar transferencias a cuentas propias, a terceros y ACH</li>
                <li>Pagar Tarjetas de Crédito, Préstamos y servicios</li>
                <li>Comprar dólares para crédito a cuenta y mucho más</li>
                <li>Pagar servicios públicos</li>
              </ul>
            </Accordion.Item>
        
          </Accordion>
        </div>
      </div>
    </div>
    </div>
  </section>
}