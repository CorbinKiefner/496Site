import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../pages/layout'
import Seo from '../../pages/seo'
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image'

const ArticlePage = ({ data }) => {
    return (
      <Layout pageTitle="Articles">
        {
          data.Drupal.nodeArticles.nodes.map(node => (
            <article key={node.title}>
              <h2>
                <Link to={`/recipes/${node.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  {node.title}
                </Link>
              </h2>
              <img src={`${node.mediaImage.mediaImage.url}`} alt="" width="500"></img>
              <p>Posted: {node.created}</p>
            </article>
          ))
        }
      </Layout>
    )
  }

  export const query = graphql`
  query {
    Drupal {
        nodeArticles(first: 10) {
            nodes {
            title
            body {
              value
            }
            mediaImage {
              mediaImage {
                url
              }
            }
            created
          }
        }
      }
    }
  `


  export const Head = () => <Seo title="My Articles" />

  export default ArticlePage