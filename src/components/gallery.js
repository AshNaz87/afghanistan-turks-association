import React from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

const Gallery = () => (
  <StaticQuery
    query={graphql`
      query allGalleryQuery {
        source: allFile(filter: { absolutePath: { regex: "/gallery/" } }) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 480, maxHeight: 380, quality: 80) {
                  ...GatsbyImageSharpFluid
                }
                sizes {
                  src
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div className="row">
        {data.source.edges.map(({ node }, index) => (
          <div className="col-12 col-md-4">
            <div className="card mb-4">
              <Img key={index} fluid={node.childImageSharp.fluid} />
            </div>
          </div>
        ))}
      </div>
    )}
  />
)

export default Gallery
