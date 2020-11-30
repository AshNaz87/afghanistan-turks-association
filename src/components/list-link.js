import React from "react"
import { Link } from "gatsby"

const ListLink = ({ to, children }) => (
  <li className="list-item-style">
    <Link className="links" to={to}>
      {children}
    </Link>
  </li>
)

export default ListLink
