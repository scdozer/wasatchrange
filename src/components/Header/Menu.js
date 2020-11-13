import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

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
`

const renderMenuItem = menuItem => {
  if (menuItem.title !== "Home") {
    return <Link to={menuItem.uri}>{menuItem.title}</Link>
  }
}

const Menu = () => {
  const data = useStaticQuery(MENU_QUERY)

  if (data.allWpPage) {
    return (
      <>
        {data.allWpPage.nodes.map(menuItem => {
          return renderMenuItem(menuItem)
        })}
      </>
    )
  } else {
    return null
  }
}

export default Menu
