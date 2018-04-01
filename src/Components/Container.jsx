import React, { Component } from 'react'
import axios from 'axios'
import { Dimmer, Loader } from 'semantic-ui-react'

import Header from './Header'
import SideMenu from './SideMenu'

const { Fragment } = React
class Container extends Component {
  constructor(args) {
    super(args)
    this.state = {
      request: false,
      showMenu: false
    }
    this.loadJson = this.loadJson.bind(this)
    this.handleMenu = this.handleMenu.bind(this)
  }
  componentDidMount() {
    this.loadJson()
  }
  handleMenu() {
    this.setState(prevState => ({ showMenu: !prevState.showMenu }))
  }
  loadJson() {
    const version = Math.random().toString()
    const url = `./api.json?${version}`
    axios.get(url)
      .then((res) => {
        this.setState(() => ({ request: res.data }))
      })
  }
  render() {
    const { title, baseurl, services } = this.state.request
    let content
    if (this.state.request === false) {
      content = (
        <Fragment>
          <Dimmer active>
            <Loader indeterminate>Cargando Documento....</Loader>
          </Dimmer>
        </Fragment>)
    } else {
      content = (
        <Fragment>
          <Header title={title} showMenu={this.handleMenu} />
          <SideMenu
            baseurl={baseurl}
            services={services}
            visible={this.state.showMenu}
            showMenu={this.handleMenu}
          />
        </Fragment>
      )
    }
    return (
      content
    )
  }
}
export default Container
