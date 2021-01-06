import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";

const MENU_QUERY = graphql`
  {
    allWpPage {
      nodes {
        id
        uri
        title
      }
    }
  }
`;

const renderMenuItem = (menuItem, setOpen, i) => {
  if (menuItem.title !== "Home") {
    return (
      <Link key={`menu${i}`} to={menuItem.uri} onClick={() => setOpen(false)}>
        {menuItem.title}
      </Link>
    );
  }
};

const Menu = ({ setOpen }) => {
  const data = useStaticQuery(MENU_QUERY);

  if (data.allWpPage) {
    return (
      <>
        {data.allWpPage.nodes.map((menuItem, i) => {
          return renderMenuItem(menuItem, setOpen, i);
        })}
      </>
    );
  } else {
    return null;
  }
};

Menu.defaultProps = {
  setOpen: () => null,
};

export default Menu;
