import React, { Component } from 'react';
import PropTypes from 'prop-types';

import pureRender from 'pure-render-decorator';

@pureRender
export default class WrapperUserPage extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children } = this.props;

    return (
      <div className="flex layout vertical">
        {children}
      </div>
    );
  }
}
