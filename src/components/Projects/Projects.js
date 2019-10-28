import React from 'react'
import styled from 'styled-components'
import Project from './Project'
import Container from '../Grid/Container'
import Grid from '../Grid/Grid'
import { useStaticQuery, graphql } from 'gatsby'

/*************************/
/********* CSS ***********/
/*************************/
const StyledProjects = styled.section`
  padding: 2.25rem 0;
  > div {
    position: relative;
    h2 {
      font-family: var(--mono);
      color: var(--muted);
      font-size: smaller;
      transform-origin: right top;
      transform: rotate(270deg);
      position: absolute;
      top: 0;
      left: -7.725rem;
    }
  }
  > div > div:last-child {
    padding-left: 2.5rem;
  }
`

/*************************/
/********* JSX ***********/
/*************************/
const Projects = () => {
  // useStaticQuery Hook to get data, destructured
  const { projects } = useStaticQuery(graphql`
    {
      projects: allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            frontmatter {
              title
              repo
              description
              color
              image {
                childImageSharp {
                  imgSrc: fluid {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <StyledProjects>
      <Container>
        <h2>
          Recent Projects{' '}
          <span role="img" aria-label="Take a look">
            👀
          </span>
        </h2>
        <Grid sm={2} md={4} lg={4} spacing={1.25}>
          {projects.edges.map(({ node }, i) => (
            <Project key={i} data={node} />
          ))}
        </Grid>
      </Container>
    </StyledProjects>
  )
}

export default Projects
