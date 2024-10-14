import React from 'react'
import { InnerWrapper } from 'components/globalStyling'

export const AboutMe = () => {
  return (
    // <OuterWrapper backgroundImage="linear-gradient(0deg, #ffffff 0%, #fec8ab 100%);">
    <InnerWrapper selectedColor="#622658">
      {// eslint-disable-next-line max-len
      }<p> <span className="line" /><span className="dot" />Hi! I&apos;m a frontend developer with a background as a physiotherapist. I&apos;ve worked over 6 years in a a mulitprofessional team rehabilitating people with disabilites. For me teamwork is key and I want to create products that looks nice, but also works great for everyone!</p>
    </InnerWrapper>
    // </OuterWrapper>

  )
}