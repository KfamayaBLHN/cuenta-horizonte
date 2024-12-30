import React, { useEffect, useState } from "react";
import styles from './styles.module.scss';


const JotformContainer = props => {

  return (
    <section className={`${styles['jotform-container']} py-9`}>
      <div className={`container-fluid ${styles['box_container']}`}>

        <div className="row">
          <div className="col-12">

            <div className="row justify-content-center justify-content-md-between body-section">
              {props.children}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}




/**
 * 
 * Header
 * @description Header del componente
 * @param {Object} props 
 * @returns {DOM Object}
 */
const Header = props => {
  return <div className="col-12 text-center header-section">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10">
          {props.children}
        </div>
      </div>
    </div>
}
JotformContainer.Header = Header;



const Form = props => {

  const [options, setOptions] = useState({
    ID: '',
    title: '',
    height: '100'
  });

  useEffect( () => {
    if ( typeof props.options != "undefined" ) {
      setOptions({
        ...options,
        ...props.options
      })
    }
    resizeOptions();
  }, []);


  const resizeOptions = function () {

    var ifr = document.getElementById(`JotFormIFrame-${options.ID}`);
    if (window.location.href && window.location.href.indexOf("?") > -1) {
      
      var get = window
        .location
        .href
        .substr(window.location.href.indexOf("?") + 1);

      if (ifr && get.length > 0) {
        var src = ifr.src;
        src = src.indexOf("?") > -1
          ? src + "&" + get
          : src + "?" + get;
        ifr.src = src;
      }
    }

    window.handleIFrameMessage = function (e) {
      if (typeof e.data === 'object') {
        return;
      }
      let iframe;
      var args = e
        .data
        .split(":");
      if (args.length > 2) {
        iframe = document.getElementById("JotFormIFrame-" + args[(args.length - 1)]);
      } else {
        iframe = document.getElementById("JotFormIFrame");
      }
      if (!iframe) {
        return;
      }
      switch (args[0]) {
        case "scrollIntoView":
          iframe.scrollIntoView();
          break;
        case "setHeight":
          var newHeight = Number(args[1]) + 10;
          iframe.style.height = (newHeight) + "px";
          iframe.style.width = '100%';
          break;
        case "collapseErrorPage":
          if (iframe.clientHeight > window.innerHeight) {
            iframe.style.height = (window.innerHeight + 10) + "px";
          }
          break;
        case "reloadPage":
          window
            .location
            .reload();
          break;
        case "loadScript":
          var src = args[1];
          if (args.length > 3) {
            src = args[1] + ':' + args[2];
          }
          var script = document.createElement('script');
          script.src = src;
          script.type = 'text/javascript';
          document
            .body
            .appendChild(script);
          break;
        case "exitFullscreen":
          if (window.document.exitFullscreen)
            window
              .document
              .exitFullscreen();
          else if (window.document.mozCancelFullScreen)
            window
              .document
              .mozCancelFullScreen();
          else if (window.document.mozCancelFullscreen)
            window
              .document
              .mozCancelFullScreen();
          else if (window.document.webkitExitFullscreen)
            window
              .document
              .webkitExitFullscreen();
          else if (window.document.msExitFullscreen)
            window
              .document
              .msExitFullscreen();
          break;
      }
      var isJotForm = (e.origin.indexOf("jotform") > -1)
        ? true
        : false;
      if (isJotForm && "contentWindow" in iframe && "postMessage" in iframe.contentWindow) {
        var urls = {
          "docurl": encodeURIComponent(document.URL),
          "referrer": encodeURIComponent(document.referrer)
        };
        iframe
          .contentWindow
          .postMessage(JSON.stringify({ "type": "urls", "value": urls }), "*");
      }
    };

    if (window.addEventListener) {
      window.addEventListener("message", handleIFrameMessage, false);
    } else if (window.attachEvent) {
      window.attachEvent("onmessage", handleIFrameMessage);
    }
  }

  return <div className="jotformBox col-12 col-md-6 py-5 py-md-10">
    <div className="form-container">
      {props.children}

      <iframe id={`JotFormIFrame-${options.ID}`} title="{{jotformTitle}}" allowtransparency="true" allowFullScreen={true} allow="geolocation; microphone; camera" src={`https://form.jotform.com/${options.ID}`} frameBorder="0" 
        style={{
          width: "100%",
          "minWidth": "auto",
          "height": options.height,
          border: "none"
        }}
        scrolling="no">
      </iframe>
      <script type="text/javascript" dangerouslySetInnerHTML={{__html: `
      
      `}}></script>
    </div>
  </div>
}
JotformContainer.Form = Form;


const Content = props => {
  return <div className={`${styles.contenBox} col-12 col-md-6 py-5 py-md-10`}>
    {props.children}
  </div>
}
JotformContainer.Content = Content;


export default JotformContainer;