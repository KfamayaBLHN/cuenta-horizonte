import React from "react";
import Hero from "@/components/Hero";

const Banner = () => {
  const site_url = process.env.NEXT_PUBLIC_SITE_URL;

  return (
    <Hero className="hero-home" site_url={site_url}>
      <h1 className="text-gray">
      <span className="color1">Construye la vida que deseas, con tu</span><span className="color2"> Cuenta Horizonte </span>
      </h1>
      <div className="d-none d-md-block">
        <p className="h4 text-gray pt-1 fw-normal">
          Ahorra con una tasa de interés atractiva y beneficios exclusivos,
          para que comiences a formar tu futuro hoy
        </p>
        <a href='https://www.lafise.com/blh/banca-personal/cuenta-horizonte/solicitud-en-linea' className="btn btn-light btn-lg mt-3">¡Solicítala ya!</a>
      </div>
      <div className="d-sm-block d-md-none">
        <p className="h4 text-gray pt-1 fw-normal">
        Ahorra con una tasa de interés atractiva y beneficios exclusivos, para que comiences a formar tu futuro hoy
        </p>
        <a href='https://www.lafise.com/blh/banca-personal/cuenta-horizonte/solicitud-en-linea' className="btn btn-light btn-lg mt-3">¡Solicítala ya!</a>
      </div>
    </Hero>
  );
};

export default Banner;
