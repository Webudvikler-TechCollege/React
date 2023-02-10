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

	h2 {
		color: ${props => props.theme.colors.tertiary};
		font-family: ${props => props.theme.fonts[0]};
		font-size: 1.5rem;
		margin-block: 0rem;
	}
`




export { GlobalStyle, Reset }