// @flow
import React, { Component } from 'react'

type Props = {
  name: string
}

class App extends Component {
  props: Props

  render () {
    return (
      <div>hello App Component!!!! {this.props.name}</div>
    )
  }
}

export default App
