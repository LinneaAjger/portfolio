/* eslint-disable max-len */
import React from 'react'
import styled from 'styled-components'
import projectImg from './images/projectImg.png'
import { ProjectText, StyledLink } from './globalStyling'

export const SingleProject = () => {
  return (
    <LayoutBox>
      <span className="line" />
      <ProjectText>
        <h5>
          <StyledLink target="_blank" rel="noopener noreferrer" href="https://next-movie-time.vercel.app/">MovieTime</StyledLink>
        </h5>
        <h6>Hobby project • Next.js, HTML/CSS/JS</h6>
        <p>MovieTime challenged me with using asynchronous fetching and parsing a JSON response from an API, effectively cherry-picking the data points I wanted from it, and composing it in a reusable movie poster component.</p>
      </ProjectText>
      <ImageBox />
    </LayoutBox>
  )
}

const LayoutBox = styled.div`
  display: flex;
  gap: 50px;
  background-color: #113840;
  color: #B4D3D9;
  min-height: 300px;
  width: 100%;
  flex-direction: column-reverse;
  align-items: center;

img {
  border-radius: 10px;
}

  @media (min-width: 840px) {
    flex-direction: row;
    align-items: flex-start;
    /* min-height: 450px; */
  }
`

const ImageBox = styled.div`
background: linear-gradient(rgb(17,56,64,0), rgb(17,56,64,0), rgb(17,56,64,0.9), rgb(17,56,64,1)), url(${projectImg});
background-size: cover;
background-repeat: no-repeat;
height: 100%;
min-height: 280px;
width: 100%;
border-radius: 10px;
opacity: 0.6;
box-shadow: rgba(137, 216, 216, 0.05) 0px -60px 60px 0px;

@media (min-width: 840px) {
    width: 100%;
    background-size: contain;

  }
`