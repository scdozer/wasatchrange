import React from "react";
import { Container, Flex } from "../../styles/globalStyles";
import Fade from "react-reveal/Fade";
import { FooterContent, FooterContainer } from "./styles";
import instagram from "../../images/instagram.png";
import facebook from "../../images/facebook.png";

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
            <a
              className="social-links"
              target="_blank"
              href="https://www.instagram.com/wasatchrangeaviation/"
            >
              <img width={30} height={30} src={instagram} alt="instagram" />
            </a>
            <a
              className="social-links"
              target="_blank"
              href="https://www.facebook.com/WasatchRangeAviation/"
            >
              <img width={30} height={30} src={facebook} alt="facebook" />
            </a>
          </Fade>
        </FooterContent>
      </Flex>
    </Container>
  </FooterContainer>
);

export default Footer;
