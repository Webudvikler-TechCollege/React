import { createGlobalStyle } from 'styled-components'
import { Reset } from './Mixins'

const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
		font-family: ${props => props.theme.fonts[1]};
	}

	body {
		background-color: ${props => props.theme.colors.primary};
		${Reset};
	}
`




export { GlobalStyle, Reset }