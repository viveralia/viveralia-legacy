import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

/*************************/
/********* CSS ***********/
/*************************/
const StyledProject = styled.article`
  margin-bottom: 1.5rem;
  :last-child,
  :nth-last-child(2) {
    margin-bottom: 0;
  }
  a {
    div {
      width: 100%;
      margin-bottom: 2.5rem;
      .gatsby-image-wrapper {
        transform: translate(-10%, 15%) !important;
        padding: 2.75rem;
      }
    }
    h3 {
      font-size: 1rem;
      margin-bottom: 0.25rem;
    }
    p {
      font-size: smaller;
      color: var(--muted);
      font-family: var(--mono);
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
  @media (min-width: 768px) {
    margin-bottom: 0;
    a {
      h3 {
        display: inline-block;
        background-image: linear-gradient(
          180deg,
          transparent 92%,
          var(--black) 0
        );
        background-size: 0 100%;
        background-repeat: no-repeat;
        transition: background-size 0.4s ease;
      }
      :hover {
        h3 {
          background-size: 100% 100%;
        }
      }
      div {
        margin-bottom: 3.5rem;
      }
    }
  }
`

/*************************/
/********* JSX ***********/
/*************************/
const Project = ({ data }) => {
  const {
    title,
    description,
    repo,
    color,
    image: {
      childImageSharp: { imgSrc },
    },
  } = data.frontmatter

  return (
    <StyledProject>
      <a href={repo} target="_blank" rel="noopener noreferrer">
        <div style={{ background: `#${color}` }}>
          <Img fluid={imgSrc} alt={title} />
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
      </a>
    </StyledProject>
  )
}

export default Project
