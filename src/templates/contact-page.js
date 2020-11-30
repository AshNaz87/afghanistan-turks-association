import React from "react"
import { graphql } from "gatsby"
import { RiSendPlane2Line } from "react-icons/ri"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const pageQuery = graphql`
  query ContactQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 140)
      frontmatter {
        title
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`

const Contact = ({ data }) => {
  const { markdownRemark, site } = data // data.markdownRemark holds your post data
  const { frontmatter } = markdownRemark

  return (
    <Layout className="contact-page">
      <SEO
        title={frontmatter.title}
        description={frontmatter.title + " " + site.siteMetadata.title}
      />
      <div className="row">
        <div className="col-12">
          <h1 className="text-center mb-4">{frontmatter.title}</h1>
          <div className="description text-center">
            Please get in touch if you have any questions or suggestions. We
            welcome feedback. Thank you!
          </div>
        </div>
        <div className="col-12 col-md-8 offset-md-2">
          <form
            className="contact-form"
            action="/greeting"
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <div className="form-group">
              <input type="hidden" name="form-name" value="contact" />
              <label htmlFor="name">Name</label>
              <input
                className="form-control"
                type="text"
                name="name"
                id="name"
                required
              />
              <label htmlFor="email">Email</label>
              <input
                className="form-control"
                type="email"
                name="email"
                id="email"
                required
              />
              <label htmlFor="subject">Subject</label>
              <input
                className="form-control"
                type="text"
                name="subject"
                id="subject"
                required
              />
              <label htmlFor="message">Message</label>
              <textarea
                className="form-control"
                name="message"
                id="message"
                required
              ></textarea>
              <button className="btn-lg btn-primary my-4" type="submit">
                Send Message &nbsp;
                <span>
                  <RiSendPlane2Line />
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
