import React from "react";
import Menu from "./Menu";
import { Container } from "../../styles/globalStyles";
import { Logo, Navigation, HeaderContainer, HeaderFlex } from "./styles.js";
import { Link } from "gatsby";
// import mainVideo from './mainloop.mov';

const Header = () => {
  return (
    <HeaderContainer>
      <Container>
        <HeaderFlex>
          <Link to={"/"}>
            <Logo>Wasatch Range Aviation</Logo>
          </Link>
          <Navigation>
            <Menu />
          </Navigation>
        </HeaderFlex>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
