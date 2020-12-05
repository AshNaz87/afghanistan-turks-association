import React from "react"
import { Link } from "gatsby"

const Logo = ({ image, width }) => (
  <Link to="/">
    <img
      src={image}
      className="site-logo"
      alt="ATA UK logo"
      width={width}
    />
  </Link>
)

export default Logo
