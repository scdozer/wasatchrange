import React, { useState } from "react";
import Menu from "./Menu";
import { Container } from "../../styles/globalStyles";
import {
  Logo,
  Navigation,
  HeaderContainer,
  HeaderFlex,
  MobileNav,
  Open,
} from "./styles.js";
import { Link } from "gatsby";
import logo from "../../images/logo.jpg";
// import mainVideo from './mainloop.mov';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <HeaderContainer>
      <Container>
        <HeaderFlex>
          <Link to={"/"}>
            <Logo>
              <img src={logo} alt="Wasatch Range Aviation" />
            </Logo>
          </Link>
          <Navigation>
            <Menu />
          </Navigation>
        </HeaderFlex>
        <Open onClick={() => setOpen(!open)}>Menu</Open>
        {open && (
          <MobileNav>
            <Menu setOpen={setOpen} />
          </MobileNav>
        )}
      </Container>
    </HeaderContainer>
  );
};

export default Header;
