import source from './source.json';

export default props => {
  const site_url = process.env.NEXT_PUBLIC_SITE_URL;

  const isImg = function (key) {
    return source.hasOwnProperty(key);
  }

  return (
    <>
      {isImg(props.name) ? (
        props.href ? (
          <a href={props.href}> 
            <img 
              src={`${site_url}${source[props.name].src}`}
              alt={source[props.name].alt}
              title={source[props.name].title}
              width={source[props.name].w}
              height={source[props.name].h}
              className={`img-fluid ${props.className || ''}`}
            />
          </a>
        ) : (
          <div> 
            <img 
              src={`${site_url}${source[props.name].src}`}
              alt={source[props.name].alt}
              title={source[props.name].title}
              width={source[props.name].w}
              height={source[props.name].h}
              className={`img-fluid ${props.className || ''}`}
            />
          </div>
        )
      ) : ''}
    </>
  );
}
