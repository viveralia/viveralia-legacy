import styled from 'styled-components'

/*************************/
/********* CSS ***********/
/*************************/
const Container = styled.div`
  padding: 0 var(--container);
  max-width: ${props => (props.fullwidth ? '100%' : 'var(--maxWidth)')};
  margin: 0 auto;
`

export default Container
