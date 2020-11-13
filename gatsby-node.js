/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const createPages = require(`./create/createPages`)

exports.createPages = async ({ actions, graphql }) => {
  await createPages({ actions, graphql })
}
