"use client"
import Breadcrumbs from '@/secciones/home/Breadcrumbs';
import Hero from '@/secciones/home/Hero';
import Seccion2 from '@/secciones/home/Seccion2'
import Seccion3 from '@/secciones/home/Seccion3'
import Seccion4 from '@/secciones/home/Seccion4'
import Seccion5 from '@/secciones/home/Seccion5'
import Seccion6 from '@/secciones/home/Seccion6'

export default function Home() {
  const env = process.env.NODE_ENV;
  return (
    <>
      {env !== 'development' && (<div dangerouslySetInnerHTML={{ __html: '<!--#include virtual="/cdn/basics/header-banco/v3.0/header-blh.html" -->' }}></div>)}
      <main>
        <Hero />
        <Breadcrumbs />
        <Seccion2 />
        <Seccion3 />
        <Seccion4 />
        <Seccion5 />
        <Seccion6 />
      </main>
      {env !== 'development' && (<div dangerouslySetInnerHTML={{ __html: '<!--#include virtual="/cdn/basics/footer-banco/v3.0/footer-blh.html" -->' }}></div>)}
    </>
  )
}
