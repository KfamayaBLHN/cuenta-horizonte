import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Disfruta from './Disfruta';
import Recibe from './Recibe';
import Acumula from './Acumula';
import Accede from './Administra';
import Retiros from './retiros';
import Obten from './Obten';


const Relacionados = (props) => {
  const backgroundColor = "bg-gray-1";
  return (
    <section className={`py-5 overflow-hidden ${backgroundColor}`}>
      <div className="container-fluid">{props.children}</div>
    </section>
  );
};

const responsive = {
  desktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 576 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 576, min: 0 },
    items: 1
  }
};

const Item = props => {
  return <div className="carousel-container h-100">
    <div className="h-100 px-2">
      {props.children}
    </div>
  </div>
}

const Cards = props => {
  return <div className="card-groud-n3">
    <article >
      {
        props.type == 'cards' && <>
          <Carousel responsive={responsive} autoPlay={true} infinite={true} autoPlaySpeed={3000} showDots={true}>
            <Item>
              <Obten />
            </Item>
            <Item>
              <Recibe />
            </Item>
            <Item>
              <Disfruta />
            </Item>
            <Item>
              <Accede />
            </Item>
            <Item>
              <Acumula />
            </Item>
            <Item>
              <Retiros />
            </Item>
          </Carousel>
        </>
      }
    </article>
  </div>
}

const Title = props => {
  return <div className="row">
    <div className="col-12 text-center pb-5">
      <h2 className="h2">{props.children}</h2>
    </div>
  </div>
}

Relacionados.Title = Title;
Relacionados.Cards = Cards;

export default Relacionados