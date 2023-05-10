// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { graphql } from 'gatsby'

// Step 2: Define your component
const RecipesPage = props => {

  const data = {
    nodeFood: props.pageContext.data
  }

  console.log(data);

  return (
    <Layout pageTitle="Recipes">
      <p>Recipe page.</p>
      <h2>{DataTransfer.nodeFood?.title}</h2>
    </Layout>
  )
}

export const Head = () => <Seo title="Recipes" />

// Step 3: Export your component
export default RecipesPage