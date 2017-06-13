import React, { Component } from 'react';
import PropTypes from 'prop-types';

import pureRender from 'pure-render-decorator';
import WrapperAdminPage from 'routes/admin/component/page';

@pureRender
export default class AdminPage extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children } = this.props;

    return (
      <WrapperAdminPage>
        {children}
      </WrapperAdminPage>
    );
  }
}
