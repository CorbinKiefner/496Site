import * as React from 'react'
import { graphql } from 'gatsby'

const pageTemplate = props => {

  const data = {
    nodeFood: props.pageContext.data
  }
  
  console.log(data);

  return (
    <h2>{DataTransfer.nodeFood?.title}</h2>
  )
}

export default pageTemplate