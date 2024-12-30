/**
 * ScrollTo
 * @description realiza la animación al desplazarme a una sección del sitio
 * @author juanpablotorres | jptorres@lafise.com
 * @date 28-Octubre-2022
*/
class ScrollTo 
{
  /**
   * go
   * @description Realiza el movimiento al elemento indicado
   * @param {String} _element - selector del elemento al que se desea realizar el desplazamiento
   */
  go ( _element ) {
    const element = document.querySelector( _element );
    const rect = element.getBoundingClientRect();
    const top = rect.top + window.scrollY;

    window.scroll({
      top: top,
      behavior: 'smooth'
    });
  }
}

export default ScrollTo;

/**
 * 
Ejemplo
import ScrollTo from './ScrollTo';
const _scrollTo = new ScrollTo();
_scrollTo.go('#element');
 */