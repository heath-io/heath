// @flow
import React, { Component } from 'react';
// import { Provider } from 'react-redux';

type Props = {
  history: {}
};

export default class Root extends Component<Props> {
  render() {
    const { history } = this.props;
    return (
      <div>
        <p>Hello react</p>
      </div>
    );
  }
}
