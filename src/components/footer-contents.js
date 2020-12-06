import React from "React"
import { Link } from "gatsby"
import { FaFacebookF } from "react-icons/fa"

import { MenuItems } from "../util/MenuItems"
import YAMLData from "../content/content.yml"

const listMenuItems = MenuItems.slice(1).map(menuItem => (
  <li className="mb-2" key={menuItem.id}>
    <Link className="links" to={menuItem.path}>
      {menuItem.title}
    </Link>
  </li>
))

const FooterContents = () => (
  <>
    <div className="col-12 col-sm-4">
      <h3 className="white-color">Connect</h3>
      <ul className="list-unstyled mb-4">
        <li className="mb-2">
          <a href={`mailto:${YAMLData.contact_email}`} className="links">
            Email
          </a>
        </li>
        <li className="mb-2">
          <a href={YAMLData.facebook_url} className="links">
            <FaFacebookF />
          </a>
        </li>
      </ul>
    </div>
    <div className="col-12 col-sm-4">
      <h3 className="white-color">Links</h3>
      <ul className="list-unstyled mb-4">{listMenuItems}</ul>
    </div>
  </>
)

export default FooterContents
