import React from "react"
import Fade from "react-reveal/Fade"
import { HeroContainer, HeroVideo } from "./styles.js"

const renderVideoHero = (heading, subheading, url) => {
  return (
    <HeroContainer>
      <HeroVideo>
        <video src={url} autoPlay muted loop playsInline type='video/mp4'></video>
      </HeroVideo>
      <Fade bottom distance="50px">
        <h1>{heading}</h1>
        <p>{subheading}</p>
      </Fade>
    </HeroContainer>
  )
}

const renderImageHero = (heading, subheading, url) => {
  return (
    <HeroContainer
      style={{
        background: `url(${url}) no-repeat center center`,
        backgroundSize: "cover",
      }}
    >
      <Fade bottom distance="50px">
        <div>
          <h1>{heading}</h1>
          <p>{subheading}</p>
        </div>
      </Fade>
    </HeroContainer>
  )
}

export default function Hero({ content, isVideo = false }) {
  const { heading, subheading, url } = content
  return isVideo
    ? renderVideoHero(heading, subheading, url)
    : renderImageHero(heading, subheading, url)
}
