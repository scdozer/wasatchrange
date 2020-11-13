import React from "react"
import Fade from "react-reveal/Fade"
import { ContentContainer, Text, Image } from "./styles"

export default function ContentImage({ leftimage, rightcontent }) {
  return (
    <Fade left distance="50px">
      <ContentContainer>
        <Image
          style={{
            background: `url(${leftimage.mediaItemUrl}) no-repeat center center`,
            backgroundSize: "cover",
          }}
        />
        <Text dangerouslySetInnerHTML={{ __html: rightcontent }} />
      </ContentContainer>
    </Fade>
  )
}
