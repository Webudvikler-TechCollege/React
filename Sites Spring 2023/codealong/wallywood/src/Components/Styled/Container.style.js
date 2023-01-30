import styled from 'styled-components'

export const ContainerStyle = styled.section`
	background-color: ${props => props.theme.colors.light};
	width: 100%;
	height: 100%;
	max-width: ${props => props.maxwidth}px;
	margin: 0 auto;
`

