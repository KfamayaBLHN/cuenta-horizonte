import { Card, CardImage, CardBody, CardFooter } from "@/partials/Common/Cards"
import Img from '@/partials/Common/Images'

export default props => {
  return <Card>
    <Img name="SinPenalizacionSvg" className="card-img" />
    <CardBody>
      <h3 className="fs-5 pb-1 pt-2">
        Sin penalización
      </h3>
      <p className="pb-2">
        por retiro de fondos
      </p>
    </CardBody>
  </Card>
}