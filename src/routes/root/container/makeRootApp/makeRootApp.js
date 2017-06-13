import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getMuiTheme } from 'material-ui/styles';
import { connect } from 'react-redux';
import Radium, { StyleRoot, Style } from 'radium';

import makeRootAppSelector from 'routes/root/selector/makeRootApp';

import styles from './styles';

export default function makeRootApp(userAgent, AppPage) { // eslint-disable-line
  @Radium
  @connect(makeRootAppSelector)
  class RootPage extends Component {
    static displayName = 'RootApp';

    static propTypes = {
      theme: PropTypes.object,
    };

    static childContextTypes = {
      muiTheme: PropTypes.object,
    };

    getChildContext() {
      return {
        muiTheme: getMuiTheme(this.props.theme, { userAgent }),
      };
    }

    render() {
      return (
        <StyleRoot radiumConfig={{ userAgent }} className="flex layout vertical">
          <Style rules={styles} />
          <AppPage {...this.props} />
        </StyleRoot>
      );
    }
  }

  return RootPage;
}
