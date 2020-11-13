import React from "react"
import Fade from "react-reveal/Fade"
import { FullContainer } from "./styles"

export default function Full({ content }) {
  return (
    <Fade top distance="50px">
      <FullContainer dangerouslySetInnerHTML={{ __html: content }} />
    </Fade>
  )
}
