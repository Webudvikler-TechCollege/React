import styled from 'styled-components'

export const CartListStyle = styled.div`
	&>div {
		&:first-child, &:last-child {
			font-weight: bold;
		}

		display: grid;
		grid-template-columns: 2fr 1fr 1fr 1fr;
		grid-row-gap: 0;
		padding: 0.5rem 0;
		border-bottom: solid 1px #ccc;

		div {
			text-align: right;

			&:first-child {
				text-align: left;
			}
		}
	}
`