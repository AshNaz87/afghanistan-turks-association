import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Services from "../components/services"
import Support from "../components/support"

export const pageQuery = graphql`
  query HomeQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        tagline
        featuredImage {
          childImageSharp {
            fluid(
              maxWidth: 480
              maxHeight: 380
              quality: 80
              srcSetBreakpoints: [960, 1440]
            ) {
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
`

const HomePage = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter } = markdownRemark
  const Image = frontmatter.featuredImage
    ? frontmatter.featuredImage.childImageSharp.fluid
    : ""

  return (
    <Layout>
      <SEO />
      <div className="d-flex w-100 align-items-center mb-5 mobile-flex">
        <div className="col-12 col-sm-6">
          <h1 className="title text-center">{frontmatter.title}</h1>
          <p className="tagline text-center">{frontmatter.tagline}</p>
        </div>
        <div className="col-12 col-sm-6">
          {Image ? (
            <Img
              fluid={Image}
              alt={frontmatter.title + " - featured image"}
              className="featured-image"
            />
          ) : (
            ""
          )}
        </div>
      </div>
      <Services />
      <Support />
    </Layout>
  )
}

export default HomePage
