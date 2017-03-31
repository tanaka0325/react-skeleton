// @flow
import React, { Component } from 'react';

type Props = {
  name: string
}

class App extends Component {
  constructor(props: Props) {
    super(props)
  }
  render() {
    return (
      <div>hello App Component!!!! {this.props.name}</div>
    );
  }
}

export default App;
