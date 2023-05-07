const path = require(`path`)


// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    const pageTemplate = path.resolve(`src/pages/recipe.js`)

    resolve(
        graphql(
          `
          query MyQuery {
              Drupal {
                nodeRecipes(first: 100) {
                  edges {
                    node {
                      changed
                      id
                      cookingTime
                      created
                      path
                      status
                      title
                      preparationTime
                      numberOfServings
                    }
                  }
                }
              }
            }
          `
        )
    )
  })
}