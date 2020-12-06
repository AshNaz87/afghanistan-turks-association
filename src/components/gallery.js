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
              relativePath
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
          <div className="col-12 col-md-4" key={index}>
            <div className="card mb-4">
              <Img
                fluid={node.childImageSharp.fluid}
                alt={node.relativePath
                  .split("/")
                  .join("")
                  .split(".jpg")
                  .join("")
                  .split("-")
                  .join(" ")}
              />
            </div>
          </div>
        ))}
      </div>
    )}
  />
)

export default Gallery
