import React, { Component } from 'react';
import PropTypes from 'prop-types';

import pureRender from 'pure-render-decorator';
import WrapperUserPage from 'routes/user/component/page';

@pureRender
export default class UserPage extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children } = this.props;

    return (
      <WrapperUserPage>
        {children}
      </WrapperUserPage>
    );
  }
}
