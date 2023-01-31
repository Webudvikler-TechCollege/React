import { createGlobalStyle } from 'styled-components'
import { Reset } from './Mixins'

const GlobalStyle = createGlobalStyle`

	* {
		box-sizing: border-box;
		font-family: ${props => props.theme.fonts[1]};
		color: ${props => props.theme.colors.tertiary};
		font-size: 0.98rem;
	}

	body {
		background-color: ${props => props.theme.colors.primary};
		${Reset};
	}

	h1 {
		color: ${props => props.theme.colors.secondary};
		font-family: ${props => props.theme.fonts[0]};
		font-size: 2.0rem;
		margin-block: 0.8rem;
	}
`




export { GlobalStyle, Reset }