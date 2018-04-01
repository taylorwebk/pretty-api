import React, { Component } from 'react'
import { Sidebar, Segment, Menu, Button, Icon } from 'semantic-ui-react'

import Content from './Content'

class SidebarMenu extends Component {
  constructor(args) {
    super(args)
    this.state = {
      activeindex: 0
    }
  }
  changeIndex(index) {
    this.props.showMenu()
    this.setState(() => ({
      activeindex: index
    }))
  }
  render() {
    const { services, visible, baseurl } = this.props
    const menuitems = services.map((service, index) => {
      let color
      switch (service.method) {
        case 'POST':
          color = 'blue'
          break
        case 'GET':
          color = 'green'
          break
        case 'PUT':
          color = 'orange'
          break
        case 'DELETE':
          color = 'red'
          break
        default:
          color = 'grey'
      }
      return (
        <Menu.Item
          onClick={() => { this.changeIndex(index) }}
          key={service.url}
          color={color}
        >
          <Button color={color} inverted>{service.method}</Button>
          <strong style={{ fontSize: 15 }}>{service.url}</strong>
          {service.protected ? <Icon size="large" name="lock" /> : null}
        </Menu.Item>
      )
    })
    return (
      <Sidebar.Pushable as={Segment} attached="top" style={{ transform: 'translateY(-15px)' }}>
        <Sidebar as={Menu} animation="uncover" width="very wide" visible={visible} vertical inverted>
          {menuitems}
        </Sidebar>
        <Sidebar.Pusher>
          <Content
            service={services[this.state.activeindex]}
            baseurl={baseurl}
          />
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    )
  }
}

export default SidebarMenu
