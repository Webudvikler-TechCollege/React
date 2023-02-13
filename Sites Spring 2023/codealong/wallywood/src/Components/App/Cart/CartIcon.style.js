import styled from 'styled-components'

export const CartIconStyle = styled.div`
	svg {
		&:hover {
			fill: ${props => props.theme.colors.secondary};
		}
	}
`