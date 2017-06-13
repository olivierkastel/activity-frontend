import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { annotator } from 'retax-components';

import pureRender from 'pure-render-decorator';
import WrapperUserIndexPage from 'routes/user/component/indexRoute';
import UserIndexPageSelector from 'routes/user/selector/indexRoute';
import AppActionsCreator from 'actions/app';
import ActivityActionsCreator from 'actions/activity';

function mapDispatchToProps(dispatch, props) {
  const { appActions, activityActions } = props;

  return bindActionCreators({
    ...appActions.export(),
    ...activityActions.export(),
  }, dispatch);
}

@pureRender
@annotator.RetaxComponent({
  actionsCreators: {
    appActions: AppActionsCreator,
    activityActions: ActivityActionsCreator,
  },
})
@connect(UserIndexPageSelector, mapDispatchToProps)
export default class UserIndexPage extends Component {
  static propTypes = {
    toggleLeftNav: PropTypes.func,
    getCurrentActivity: PropTypes.func,
    currentActivity: PropTypes.object,
  };

  componentDidMount() {
    const { getCurrentActivity } = this.props;
    getCurrentActivity();
  }

  render() {
    const { toggleLeftNav, currentActivity } = this.props;
    return (
      <WrapperUserIndexPage
        onToggleLeftNav={toggleLeftNav}
        currentActivity={ currentActivity }
      />
    );
  }
}
