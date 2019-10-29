import React from 'react'
import styled from 'styled-components'
import Container from '../Grid/Container'

/*************************/
/********* CSS ***********/
/*************************/
const StyledHero = styled.header`
  padding: 5rem 0;
  small {
    color: var(--muted);
    font-family: var(--mono);
    display: block;
    margin-bottom: 0.75rem;
  }
  h1 {
    font-size: 1.5rem;
    font-weight: 400;
    span {
      -webkit-text-stroke-width: 0.04rem;
      -webkit-text-stroke-color: var(--muted);
      color: transparent;
      letter-spacing: -0.0275rem;
      font-weight: var(--bold);
    }
  }
  @media (min-width: 768px) {
    > div > div {
      max-width: 570px;
    }
  }
`

/*************************/
/********* JSX ***********/
/*************************/
const Hero = () => {
  return (
    <StyledHero>
      <Container>
        <div>
          <small>
            Nice to meet you{' '}
            <span role="img" aria-label="Shaking Hands Emoji">
              🤝
            </span>
          </small>
          <h1>
            I’m Iván, a Javascript <span>fullstack</span> developer who loves
            crafting the most usable and enjoyable digital experiences.
          </h1>
        </div>
      </Container>
    </StyledHero>
  )
}

export default Hero
