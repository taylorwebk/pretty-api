import React from 'react'
import { Container, Header, Message } from 'semantic-ui-react'

import JsonHighlight from './JsonHighlight'

const subtitleStyle = {
  color: '#667EDC',
  textDecoration: 'underline',
  fontWeight: 'bold'
}

const Content = ({ baseurl, service }) => {
  let request = null
  if (service.request !== null) {
    request = (
      <Container>
        <Header style={subtitleStyle} as="h3">Ejemplo Request:</Header>
        <JsonHighlight obj={service.request} />
      </Container>
    )
  }
  const warnings = service.warning.map(warning => (
    <Message warning key={warning.message}>
      <Message.Header>
        {warning.message}
      </Message.Header>
      <JsonHighlight obj={warning.json} />
    </Message>
  ))
  const errors = service.error.map(error => (
    <Message warning key={error.message}>
      <Message.Header>
        {error.message}
      </Message.Header>
      <JsonHighlight obj={error.json} />
    </Message>
  ))
  return (
    <Container>
      <Header as="h1" textAlign="center">{service.title}</Header>
      <p>{service.description}</p>
      <Header style={subtitleStyle} as="h3">Tipo:</Header>
      <p><strong>{service.method}</strong></p>
      <Header style={subtitleStyle} as="h3">Url:</Header>
      <p><code>{baseurl + service.url}</code></p>
      {request}
      <Header style={subtitleStyle} as="h3">Respuesta:</Header>
      <p><strong>{service.success.message}</strong></p>
      <JsonHighlight obj={service.success.json} />
      <Header style={subtitleStyle} as="h3">Advertencias: (errores del usuario)</Header>
      {warnings}
      <Header style={subtitleStyle} as="h3">Errores: (de desarrollador)</Header>
      {errors}
      <br />
      <br />
    </Container>
  )
}
export default Content
