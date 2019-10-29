import React from 'react'
import styled from 'styled-components'
import Container from '../Grid/Container'
import { technologies } from '../../assets/constants/technologies.json'

/*************************/
/********* CSS ***********/
/*************************/
const StyledStack = styled.section`
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  padding: 2.5rem 0;
  margin: 2.5rem 0;
  display: none;
  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    justify-content: center;
    align-items: center;
    li {
      list-style: none;
      text-align: center;
      img {
        max-height: 50px;
        object-fit: contain;
        max-width: 100%;
        filter: grayscale(100%);
        transition: all 0.4s ease;
        opacity: 0.5;
        :hover {
          opacity: 1;
          filter: grayscale(0%);
        }
      }
      :nth-child(3) {
        padding-top: 10px;
      }
      :nth-child(4) {
        img {
          max-height: 40px;
        }
      }
      :nth-child(5) {
        max-height: 45px;
      }
    }
  }
  @media (min-width: 768px) {
    display: block;
    ul {
      grid-template-columns: repeat(6, 1fr);
      grid-gap: 4rem;
    }
  }
`

/*************************/
/********* JSX ***********/
/*************************/
const Stack = () => {
  return (
    <StyledStack>
      <Container>
        <ul>
          {technologies.map(({ name, img }, i) => (
            <li key={i}>
              <img src={img} alt={name} />
            </li>
          ))}
        </ul>
      </Container>
    </StyledStack>
  )
}

export default Stack
