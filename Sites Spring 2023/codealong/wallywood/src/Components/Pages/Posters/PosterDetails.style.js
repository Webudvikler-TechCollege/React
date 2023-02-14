import styled from "styled-components"
import { Reset } from "../../Styled/Mixins"

export const PosterDetailsStyle = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;

  figure {
    ${Reset}

    img {
      width: 100%;
      max-width: 250px;
    }
  }

  p span {
			font-size: ${props => props.theme.fontsizes.xs};
      color: ${props => props.theme.colors.primary}
	}  
`
