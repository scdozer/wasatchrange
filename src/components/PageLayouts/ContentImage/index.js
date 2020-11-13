import React from "react"
import Fade from "react-reveal/Fade"
import { ContentContainer, Text, Image } from "./styles"

export default function ContentImage({ leftcontent, rightimage }) {
  return (
    <Fade right distance="50px">
      <ContentContainer>
        <Text dangerouslySetInnerHTML={{ __html: leftcontent }} />
        <Image
          style={{
            background: `url(${rightimage.mediaItemUrl}) no-repeat center center`,
            backgroundSize: "cover",
          }}
        />
      </ContentContainer>
    </Fade>
  )
}
