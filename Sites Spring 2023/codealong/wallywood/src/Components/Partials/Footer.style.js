import styled from 'styled-components'
import { Reset } from '../Styled/Mixins'

export const FooterStyle = styled.footer`
	border-top: solid 1px ${props => props.theme.colors.quinary};
	margin-top: 1rem;
	padding-top: 1rem;
	display: flex;
	justify-content: space-between;
	font-size: 0.8rem;	

	h2 {
		font-size: 1rem;
		text-transform: uppercase;
		color: ${props => props.theme.colors.secondary};
		${ Reset }
	}

	address {
		font-style: normal;
	}

	svg {
		margin-left: 0.8rem;
	}
`