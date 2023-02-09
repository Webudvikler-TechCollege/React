import styled from 'styled-components'
import {ClearList} from '../../../Styled/Mixins'

export const PosterNavsStyle = styled.nav`

	ul {
		${ClearList}

		a {
			text-decoration: none;
			color: ${props => props.theme.colors.tertiary}

		}
		.active {
			color: ${props => props.theme.colors.secondary}
		}
	}
`