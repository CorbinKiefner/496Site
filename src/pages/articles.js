// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

// Step 2: Define your component
const ArticlesPage = () => {
  return (
    <Layout pageTitle="Articles">
      <p>Articles page.</p>
    </Layout>
  )
}

export const Head = () => <Seo title="Articles" />

// Step 3: Export your component
export default ArticlesPage