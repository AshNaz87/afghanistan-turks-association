import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const PostCard = ({ data }) => (
  <div className="col-xs-12 col-sm-6 col-md-4">
    <article className="post-card mb-5">
      {data.frontmatter.featuredImage ? (
        <Link to={data.frontmatter.slug}>
          <Img
            fluid={data.frontmatter.featuredImage.childImageSharp.fluid}
            objectFit="cover"
            objectPosition="50% 50%"
            alt={data.frontmatter.title + " - Featured image"}
            className="featured-image"
          />
        </Link>
      ) : (
        ""
      )}
      <div className="post-content">
        <h2 className="title">
          <Link to={data.frontmatter.slug}>{data.frontmatter.title}</Link>
        </h2>
        <p className="meta">
          <time>{data.frontmatter.date}</time>
        </p>
      </div>
    </article>
  </div>
)

export default PostCard
