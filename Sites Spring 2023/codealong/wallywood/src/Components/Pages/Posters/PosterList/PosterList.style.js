import styled from 'styled-components'
import {Reset} from '../../../Styled/Mixins'

export const PosterListStyle = styled.section`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;

	div {
		//border: solid 1px #000;
		padding-bottom: 2rem;
		text-align: center;
		figure {
			${Reset}

			img {
				max-width: 10rem;
				border: solid 1px ${props => props.theme.colors.senary}
			}
		}

		a {
			text-decoration: none;
			color: ${props => props.theme.colors.tertiary};
			font-size: 0.9rem;
			font-weight: bold;
		}
	}
`