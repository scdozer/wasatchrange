import React from "react";
import { Container, Flex } from "../../styles/globalStyles";
import Fade from "react-reveal/Fade";
import { FooterContent, FooterContainer } from "./styles";

const Footer = () => (
  <FooterContainer>
    <Container>
      <Flex spaceBetween>
        <FooterContent>
          <Fade bottom distance="50px">
            <a href="tel:8014491665">(801) 449-1665</a>
            <a href="mailto:wasatchrangeaviation@gmail.com">
              wasatchrangeaviation@gmail.com
            </a>
          </Fade>
        </FooterContent>
      </Flex>
    </Container>
  </FooterContainer>
);

export default Footer;
