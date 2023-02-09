/**
 * Udskriver billede på forside
 * Kan skiftes ud med et slideshow
 */
import { SlideWrapperStyle } from './SlideWrapperStyle';

export default function SlideWrapper() {
  return (
	<SlideWrapperStyle>
		<img src={require('../../../../Assets/images/curtain.jpg')} alt="Wallywood" />
	</SlideWrapperStyle>
  )
}
