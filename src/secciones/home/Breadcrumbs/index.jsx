import Breadcrumbs from '../../../components/Breadcrumbs/Breadcrumbs'

export default props => {
  return (
    <>
      <Breadcrumbs items={
        [
          {label: "Inicio", url: 'https://www.lafise.com/blh'},
          {label: "Banca personal", url: 'https://www.lafise.com/blh/banca-personal'},
          {label: "Cuenta Horizonte", url: '#'}
        ]
      } />
    </>
  );
}
