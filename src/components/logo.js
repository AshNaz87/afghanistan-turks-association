import React from "react"
import { Link } from "gatsby"

const Logo = props => (
  <Link to="/">
    <img
      src={props.image}
      className="site-logo"
      alt="ATA UK logo"
      width={props.width}
    />
  </Link>
)

export default Logo
