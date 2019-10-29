import React from 'react'
import Container from '../Grid/Container'
import styled from 'styled-components'
import { networks } from '../../assets/constants/social.json'

/*************************/
/********* CSS ***********/
/*************************/
const StyledFooter = styled.footer`
  padding: 2rem 0;
  > div {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    h4 {
      font-family: var(--mono);
      letter-spacing: -0.25px;
      font-size: smaller;
      color: var(--muted);
    }
    a {
      font-size: smaller;
      background-image: linear-gradient(
        180deg,
        transparent 92%,
        var(--black) 0
      );
      background-size: 0 100%;
      background-repeat: no-repeat;
      transition: background-size 0.4s ease;
      :hover {
        background-size: 100% 100%;
      }
    }
    ul {
      li {
        display: inline;
        list-style: none;
        padding-left: 1rem;
        a {
          font-size: smaller;
        }
      }
    }
  }
  @media (min-width: 768px) {
    h4 {
      margin-bottom: 0.5rem;
    }
    div > a {
      font-size: 1.125rem;
    }
  }
`

/*************************/
/********* JSX ***********/
/*************************/
const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <div>
          <h4>
            Let's work together{' '}
            <span role="img" aria-label="Working on an awesome app emoji">
              👨‍💻
            </span>
          </h4>
          <a href="mailto:edgarv10@gmail.com">edgarv10@gmail.com</a>
        </div>
        <div>
          <ul>
            {networks.map(({ name, profileUrl }, i) => (
              <li key={i}>
                <a href={profileUrl} target="_blank" rel="noopener noreferrer">
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </StyledFooter>
  )
}

export default Footer
