// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

// Step 2: Define your component
const RecipesPage = () => {
  return (
    <Layout pageTitle="Recipes">
      <p>Recipe page.</p>
    </Layout>
  )
}

export const Head = () => <Seo title="Recipes" />

// Step 3: Export your component
export default RecipesPage