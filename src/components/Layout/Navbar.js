import React from 'react'
import styled from 'styled-components'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Container from '../Grid/Container'

/*************************/
/********* CSS ***********/
/*************************/
const StyledNav = styled.nav`
  padding: 2.25rem 0;
  a {
    font-weight: 500;
    text-transform: uppercase;
    font-size: 0.75rem;
    display: block;
    line-height: 1.2;
    max-width: 50px;
  }
`

/*************************/
/********* JSX ***********/
/*************************/
const Navbar = () => {
  // useStaticQuery Hook to get data, destructured
  const {
    site: {
      meta: { author },
    },
  } = useStaticQuery(graphql`
    {
      site {
        meta: siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <StyledNav>
      <Container>
        <Link to="/">{author}</Link>
      </Container>
    </StyledNav>
  )
}

export default Navbar
