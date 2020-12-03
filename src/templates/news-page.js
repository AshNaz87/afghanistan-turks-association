import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { FaHandsHelping } from "react-icons/fa"
import { FaRegCalendarAlt } from "react-icons/fa"
import { GrLanguage } from "react-icons/gr"
import { ImImages } from "react-icons/im"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Gallery from "../components/gallery"
import YAMLData from "../content/content.yml"

export const pageQuery = graphql`
  query NewsQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      excerpt
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

const NewsPage = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark
  const Image = frontmatter.featuredImage
    ? frontmatter.featuredImage.childImageSharp.fluid
    : ""

  return (
    <Layout>
      <SEO title={frontmatter.title} description={frontmatter.excerpt} />
      <div className="row">
        <div className="offset-1 col-10">
          <div className="col-12">
            <h1 className="text-center mb-5">{frontmatter.title}</h1>
            <h2 className="mb-4">
              Language Classes &nbsp;
              <span>
                <GrLanguage style={{color: 'var(--deep-blue)'}}/>
              </span>
            </h2>
            <p className="mb-4">
              On the 22nd November 2020, ATA-UK launched its first Uzbek
              language classes delivered online (via Zoom) for children from our
              Uzbek-Turkic communities across the UK. Our aim is to teach not
              only our native language but also our cultural and traditional
              values and identities to our children. If you wish enrol your
              child(ren), please{" "}
              <a href={`mailto:${YAMLData.contact_email}`}>
                contact our Uzbek language administrator
              </a>
              .
            </p>
          </div>
          <div className="col-12">
            <h2 className="mb-4">
              Support &amp; Advice &nbsp;
              <span>
                <FaHandsHelping style={{color: 'var(--deep-peach)'}}/>
              </span>
            </h2>
            <p className="mb-4">
              We provide help and support to the community members who may be
              new arrivals into the country, or those who need advice and
              guidance ranging from immigration issues, employment, healthcare,
              relocation to integrating into the community.
            </p>
          </div>
          <div className="col-12">
            <h2 className="mb-4">
              Events Diary &nbsp;
              <span>
                <FaRegCalendarAlt style={{color: 'var(--burgundy-red)'}} />
              </span>
            </h2>
            <p className="mb-4">
              Due to COVID-19, we currently do not have any events planned.
            </p>
          </div>
          <div className="col-12 col-md-8 offset-md-2">
            <figure className="mb-4">
              <Img
                fluid={Image}
                alt="ATA-UK event"
                className="featured-image mx-auto"
              />
              <figcaption className="text-right">ATA-UK event</figcaption>
            </figure>
          </div>
          <div className="col-12">
            <h2 className="mb-4">
              Gallery &nbsp;
              <span>
                <ImImages style={{color: 'var(--silver-slate)'}}/>
              </span>
            </h2>
          </div>
          <Gallery />
        </div>
      </div>
    </Layout>
  )
}

export default NewsPage
