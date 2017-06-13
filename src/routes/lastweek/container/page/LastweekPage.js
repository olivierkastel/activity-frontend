import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { annotator } from 'retax-components';

import pureRender from 'pure-render-decorator';
import WrapperLastWeekPage from 'routes/lastweek/component/page';
import LastweekPageSelector from 'routes/lastweek/selector/page';
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
@connect(LastweekPageSelector, mapDispatchToProps)
export default class LastWeekPage extends Component {
  static propTypes = {
    toggleLeftNav: PropTypes.func,
    getLastWeekActivity: PropTypes.func,
    lastWeekActivity: PropTypes.array,
  };

  componentDidMount() {
    const { getLastWeekActivity } = this.props;
    getLastWeekActivity();
  }

  render() {
    const { toggleLeftNav, lastWeekActivity } = this.props;

    return (
      <WrapperLastWeekPage
        onToggleLeftNav={toggleLeftNav}
        lastWeekActivity={lastWeekActivity.size ? lastWeekActivity.toJS() : lastWeekActivity}
      />
    );
  }
}
