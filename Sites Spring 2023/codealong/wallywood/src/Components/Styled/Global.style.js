import { createGlobalStyle } from 'styled-components'
import { Reset } from './Mixins'

const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
	}

	body {
		background-color: ${props => props.theme.colors.primary};
		${Reset};
	}
`




export { GlobalStyle, Reset }