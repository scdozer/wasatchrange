const path = require(`path`)

module.exports = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    const pageTemplate = path.resolve("src/templates/page.js")
    resolve(
      graphql(`
        {
          allWpPage {
            nodes {
              id
              uri
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        result.data.allWpPage.nodes.forEach(node => {
          createPage({
            path: node.uri,
            component: pageTemplate,
            context: { id: node.id, slug: node.uri },
          })
        })
        return
      })
    )
  })
}
