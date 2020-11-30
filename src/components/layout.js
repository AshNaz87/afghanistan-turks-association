import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Logo from "./logo"
import Navigation from "./navigation"
import FooterContents from "./footer-contents"
import Footer from "./footer"

import "../assets/scss/style.scss"

const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        siteImage: image
      }
    }
  }
`

const Layout = ({ children }) => {
  const { site } = useStaticQuery(query)
  const { siteImage } = site.siteMetadata

  return (
    <div className="primary-container">
      <Header>
        <Logo image={siteImage} width="60%" />
        <Navigation />
      </Header>
      <main className="mt-5">
        <div className="container">{children}</div>
      </main>
      <Footer>
        <div className="d-flex w-100 align-items-start justify-content-between mobile-flex">
          <div className="col-12 col-md-4">
            <Logo image={siteImage} width={80} />
            <p className="white-color my-3">
              Afghanistan-Turks Association (UK)
            </p>
            <p className="white-color">11681228</p>
          </div>
          <FooterContents />
        </div>
      </Footer>
    </div>
  )
}

export default Layout
