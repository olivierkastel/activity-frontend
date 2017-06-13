import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { card } from 'decorators';
import pureRender from 'pure-render-decorator';
import WithLoading from 'components/WithLoading';
import LoginForm from 'components/LoginForm';

@pureRender
@card
export default class LoginCard extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
    isLoading: PropTypes.bool,
  };

  render() {
    const { onSubmit, isLoading } = this.props;

    return (
      <WithLoading
        container={<div className="flex layout vertical center-center" />}
        isLoading={isLoading}
      >
        <LoginForm
          isLoading={isLoading}
          onSubmit={onSubmit}
        />
      </WithLoading>
    );
  }
}
