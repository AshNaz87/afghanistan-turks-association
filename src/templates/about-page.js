import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const pageQuery = graphql`
  query AboutQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      frontmatter {
        title
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

const AboutPage = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, excerpt } = markdownRemark
  const Image = frontmatter.featuredImage
    ? frontmatter.featuredImage.childImageSharp.fluid
    : ""

  return (
    <Layout className="page">
      <SEO title={frontmatter.title} description={excerpt} />
      <div className="row">
        <div className="offset-1 col-10">
          <div className="col-12">
            <h1 className="text-center">{frontmatter.title}</h1>
          </div>
          <br />
          <div>
            <article>
              <p>
                Afghanistan-Turks Association (ATA-UK) is a non-government
                community organisation (CH Registration No. 11681228)
                established in 2012 in Cambridge, UK.
              </p>
              <p>
                ATA-UK operates on the premise of bringing communities together
                to engage, integrate, help and support the Afghan-Turkic
                diaspora across the UK. We provide cultural and recreational
                services, language classes, and advice services for
                Afghan-Turkic communities in the UK.
              </p>
              <p>
                We also pride ourselves for being bridge between different
                Afghan communities in maintaining unity, cohesion and
                cooperation in the UK and beyond.
              </p>
              <br />
              <figure>
                <Img
                  fluid={Image}
                  alt="ATA-UK gathering"
                  className="featured-image"
                />
                <figcaption className="text-right">ATA-UK gathering</figcaption>
              </figure>
            </article>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
