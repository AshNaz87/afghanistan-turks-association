import React from "react"
import { RiMenu3Line, RiCloseLine } from "react-icons/ri"
import ListLink from "./list-link"
import { MenuItems } from "../util/MenuItems.js"

class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = { showMenu: false }

    this.handleToggleClick = this.handleToggleClick.bind(this)
  }

  handleToggleClick() {
    this.setState(state => ({
      showMenu: !state.showMenu,
    }))
  }

  render() {
    const listMenuItems = MenuItems.map(menuItem => (
      <ListLink key={menuItem.id} to={menuItem.path}>
        {menuItem.title}
      </ListLink>
    ))
    return (
      <nav className="site-navigation">
        <button
          onClick={this.handleToggleClick}
          className={"menu-trigger" + (this.state.showMenu ? " is-active" : "")}
          aria-label="Menu trigger"
        >
          <div className="icon-menu-line">
            <RiMenu3Line />
          </div>
          <div className="icon-menu-close">
            <RiCloseLine />
          </div>
        </button>
        <ul className="list-style">{listMenuItems}</ul>
      </nav>
    )
  }
}

export default Navigation
