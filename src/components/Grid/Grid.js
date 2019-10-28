import styled from 'styled-components'

/*************************/
/********* CSS ***********/
/*************************/
const Grid = styled.div`
  display: grid;
  grid-template-columns: ${props => props.sm && `repeat(${props.sm}, 1fr)`};
  grid-gap: ${props => props.spacing + 'rem'};
  align-items: center;
  @media (min-width: 768px) {
    grid-template-columns: ${props => props.md && `repeat(${props.md}, 1fr)`};
    grid-gap: ${props => props.spacing * 1.425 + 'rem'};
  }
  @media (min-width: 992px) {
    grid-template-columns: ${props => props.lg && `repeat(${props.lg}, 1fr)`};
    grid-gap: ${props => props.spacing * 1.75 + 'rem'};
  }
`

export default Grid
