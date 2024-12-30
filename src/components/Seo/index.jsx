
const Seo = props => {
  const env = process.env.NODE_ENV;
  if ( env !== 'development') {
    return <>{props.children}</>
  } else {
    return <></>
  }
}

const Header = props => {
  return <>
    <script type="text/javascript" async defer
      dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${props.IDTagManager}');
            `}} />

    <script type="text/javascript" async defer
      dangerouslySetInnerHTML={{
        __html: `
          var _gaq=_gaq||[];_gaq.push(["_setAccount","${props.analytics_account}"]),_gaq.push(["_setDomainName","none"]),
          _gaq.push(["_setAllowHash",!0]),_gaq.push(["_trackPageview"]),function(){var t=document.createElement("script");
          t.type="text/javascript",t.async=!0,t.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";
          var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(t,a)}();
        `}} />
  </>
}

const Footer = props => {
  return <>


    <script type="text/javascript" async defer dangerouslySetInnerHTML={{
      __html: `
          (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:2567963,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `}} />

    <noscript>
      <iframe src={`https://www.googletagmanager.com/ns.html?id=${props.IDTagManager}`} height="0" width="0" style={{ "display": "none", "visibility": "hidden" }}></iframe>
    </noscript>
  </>
}

Seo.Header = Header;
Seo.Footer = Footer;
export default Seo;