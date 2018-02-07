import React from 'react'
import { Menu, Icon } from 'semantic-ui-react'

const Header = props => (
  <Menu inverted icon>
    <Menu.Item position="left" onClick={props.showMenu}>
      <Icon name="content" />
    </Menu.Item>
    <Menu.Item position="left">
      <h3>{props.title}</h3>
    </Menu.Item>
  </Menu>
)
export default Header
