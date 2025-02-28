import React from 'react'
import styled from 'styled-components/macro';
import profile4 from './images/profile4.png';

export const ProfilePic = () => {
  return (
    <ImgBox src={profile4} />
  )
}

const ImgBox = styled.img`
    width: 100%;
    max-width: 320px;

    @media (min-width: 840px) {
      max-width: none;
      z-index: -1;
    }
    `