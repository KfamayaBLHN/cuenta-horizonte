import { Card, CardImage, CardBody, CardFooter } from "@/partials/Common/Cards"
import Img from '@/partials/Common/Images'

export default props => {
  return <Card>
    <Img name="RecibeSvg" className="card-img" />
    <CardBody>
      <h3 className="fs-5 pb-1 pt-2">
      Recibe una exclusiva
      </h3>
      <p className="pb-2">
      Tarjeta de Débito Dorada
      </p>
    </CardBody>
  </Card>
}