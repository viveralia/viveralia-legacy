import React from 'react'
import Layout from '../components/Layout/Layout'
import SEO from '../components/SEO/SEO'
import Grid from '../components/Grid/Grid'
import styled from 'styled-components'
import Container from '../components/Grid/Container'
import { Link } from 'gatsby'

/*************************/
/********* CSS ***********/
/*************************/
const StyledError = styled.div`
  min-height: calc(100vh - 202px);
  display: flex;
  align-items: center;
  text-align: center;
  img {
    max-width: 100%;
  }
  > div > div > div:last-child {
    margin: 1rem 0;
    h2 {
      font-family: var(--mono);
      font-size: smaller;
      color: var(--muted);
      margin-bottom: 0.25rem;
    }
    h1 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
    a {
      background-image: linear-gradient(
        180deg,
        transparent 92%,
        var(--black) 0
      );
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }
  }
  @media (min-width: 768px) {
    min-height: calc(100vh - 267px);
    > div > div > div:last-child {
      h1 {
        font-size: 1.75rem;
      }
    }
  }
`

/*************************/
/********* JSX ***********/
/*************************/
const NotFound = () => {
  return (
    <Layout>
      <SEO localTitle="404 - Not Found" />
      <StyledError>
        <Container>
          <Grid sm={1} md={2} lg={2} spacing={2}>
            <div>
              <img
                src="https://media.giphy.com/media/hEc4k5pN17GZq/giphy.gif"
                alt="Confused Travolta Meme"
              />
            </div>
            <div>
              <h2>404 Error</h2>
              <h1>You seem lost, or confused</h1>
              <Link to="/">Take me back home</Link>
            </div>
          </Grid>
        </Container>
      </StyledError>
    </Layout>
  )
}

export default NotFound
