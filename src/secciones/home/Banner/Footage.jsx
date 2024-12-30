import Images from "@/components/Images"
import Hero from "@/components/Hero";
export default props => {

  const site_url = process.env.NEXT_PUBLIC_SITE_URL;
  const sources = {
    mainImg: {
      "src": "imagenes/banner-footage/IMG_mujer_sonriendo.webp",
      "src_2x": "imagenes/banner-footage/IMG_mujer_sonriendo.webp",
      "alt": "",
      "title": "",
      "w": 542,
      "h": 426
    }
  }

  return (
    <div className="footage">
      <Images className="person" siteUrl={site_url} source={sources} name="mainImg" />
      <span className="footage-box-1"></span>
      <span className="footage-box-2"></span>
      <span className="footage-coin-1"></span>
      <span className="footage-coin-2"></span>
      <span className="footage-arrow"></span>
    </div>
  )
}