const Hero = props => {
  const _class = `hero py-5 py-lg-0${ typeof props.className !== "undefined" ? ` ${props.className}` : ''}`
  return (
    <section className={_class}>
      <div className="container-fluid">
        <div className="row d-md-flex align-items-center text-align-center">
          <div className="col-12 col-lg-8 col-xl-10">
            {props.children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;