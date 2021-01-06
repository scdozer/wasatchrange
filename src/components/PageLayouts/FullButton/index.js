import React from "react";
import Fade from "react-reveal/Fade";
import { FullContainer, Content, Button } from "./styles";

export default function Full({ buttonlink, buttontitle, content }) {
  return (
    <Fade top distance="50px">
      <FullContainer>
        <Content dangerouslySetInnerHTML={{ __html: content }} />
        <Button href={buttonlink}>{buttontitle}</Button>
      </FullContainer>
    </Fade>
  );
}
