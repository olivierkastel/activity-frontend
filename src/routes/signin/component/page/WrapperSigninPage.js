import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';

import pureRender from 'pure-render-decorator';
import CardsList from 'components/CardsList';
import LoginCard from 'components/LoginCard';

import styles from './styles';

@pureRender
export default class WrapperSigninPage extends Component {
  static propTypes = {
    onSignin: PropTypes.func,
    isLoading: PropTypes.bool,
  };

  render() {
    const { onSignin, isLoading } = this.props;

    return (
      <div
        className="flex layout vertical"
        style={{
          height: '100%',
          background: 'black',
        }}
      >
      <CardsList flex>
        <LoginCard
          container={<Paper style={styles.loginCard} className="layout vertical center-center" />}
          isLoading={isLoading}
          onSubmit={onSignin}
        />
      </CardsList>
    </div>
    );
  }
}
