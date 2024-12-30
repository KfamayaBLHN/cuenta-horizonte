import { useEffect, useState } from 'react';

/**
 * Componente Images
 * @description Creador de imagenes para sitios web. Encargado de crear imagenes simples e imagenes en @2x para optimizar la carga de imagenes
 */
export default props => {
  const [source, setSource] = useState({});
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  useEffect(() => {
    if (typeof props.source !== "undefined") {
      setSource(props.source);
    }
  }, []);

  /**
   * isImg
   * @description Determina si existe el key que se está los recursos enviados
   * @param {String} key - name
   * @returns Boolean
   */
  const isImg = function (key) {
    return source.hasOwnProperty(key);
  }

  /**
   * RenderImage
   * @description Crea el elemento IMG
   * @returns ReactDom
   */
  const RenderImage = () => {
    return <>
      <img
        src={`${siteUrl}${source[props.name].src}`}
        alt={source[props.name].alt}
        title={source[props.name].title}
        width={source[props.name].w}
        height={source[props.name].h}
        className={`${typeof props.className != "undefined" ? props.className : ''}`}
      />
    </>
  }

  /**
   * @description Crea el elemento picture con el soporte para imagenes en varias resoluciones.
   * @returns ReactDom
   */
  const RenderResponsiveImage = () => {
    return <>
      <picture>
        <source srcSet={`${siteUrl}${source[props.name].src_2x}`} media="(min-resolution: 192dpi)" />
        <RenderImage />
      </picture>
    </>
  }

  return <>
    {
      isImg(props.name) && <>
        {
          typeof source[props.name].src_2x !== 'undefined' ? <RenderResponsiveImage /> : <RenderImage />
        }
      </>
    }
  </>
}