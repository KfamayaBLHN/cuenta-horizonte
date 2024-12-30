"use client" 
import {useState, useEffect} from 'react';
import Head from 'next/head'
import LandingHeader from '@/components/LandingHeader'
import LandingFooter from '@/components/LandingFooter'

export default function Solicitar() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');

  useEffect(function(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const _nombre = urlParams.get('customerName');
    const _email = urlParams.get('customerEmail');
    if ( typeof _nombre !== 'undefined' && _nombre !== null ) {
      setNombre(_nombre);
    }

    if ( typeof _email !== 'undefined' && _email !== null ) {
      setCorreo(_email);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Solicitud de Cuenta Horizonte recibida</title>
        <meta name="description" content="Cuenta Horizonte - Banco LAFISE - Honduras" />
        <meta name="robots" content="index"></meta>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Solicitud de Cuenta Horizonte recibida" />
        <meta property="og:description" content="Cuenta Horizonte - Banco LAFISE - Honduras" />
        <meta property="og:image" itemProp="image" content="https://www.lafise.com/cdn/imagenes/default/og-default.png" />
        <meta property="og:site_name" content="Banco LAFISE" />
        <link rel="canonical" href="https://www.lafise.com/blh/banca-personal/cuenta-horizonte/finalizado/" /> 
      </Head>

      <LandingHeader config={{
        logo: {
          src: 'https://www.lafise.com/cdn/imagenes/default/header/Logo_Banco_LAFISE.svg',
          alt: 'Banco LAFISE',
          title: 'Banco LAFISE'
        },
        showDisclaimer: false
      }} />
      <main className="bg-gradient-primary typ-container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 py-5">
              <div className="layout-fullwidth text-center text-white">
                <i className="icon icon-party" role="presentation"></i>
                <h1 className="pb-5">¡Todo listo{nombre == '' ? ''  :  ` ${nombre}`}!</h1>
                <p className="fw-semibold pb-4">Ya estamos procesando tu solicitud.</p>
                <p className="fw-semibold">Te contactaremos {correo !== '' ? `al correo ${correo}` : ''} cuando todo esté listo.</p>
                <a className="link tc-white mt-5 d-block text-white" href="https://www.lafise.com/blh/">Volver al sitio web</a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <LandingFooter />
    </>
  )
}