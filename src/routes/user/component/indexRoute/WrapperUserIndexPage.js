import React, { Component } from 'react';
import PropTypes from 'prop-types';
import pureRender from 'pure-render-decorator';
import DayActivity from 'components/DayActivity';
import Helmet from 'react-helmet';

// material-ui
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';

// styles
import styles from './styles';

@pureRender
export default class WrapperUserIndexPage extends Component {
  static propTypes = {
    currentActivity: PropTypes.object,
  };

  constructor(...args) {
    super(...args);
    this.state = {
      stepIndex: 0,
    };
  }

  getStepContent(stepIndex) {
    const { currentActivity } = this.props;

    switch (stepIndex) {
      case 0:
        return (
          <div>
            <h1>Your Current Activity</h1>
            <DayActivity
              day = {'Today'}
              activity = {currentActivity}
            />
          </div>
      );
      default:
        return 'You\'re a long way from home sonny jim!';
    }
  }

  render() {
    const {
      stepIndex,
    } = this.state;

    return (
      <div className="flex layout vertical">
        <Toolbar style={{ background: 'white', borderBottom: '1px solid #aaaaaa', height: 48 }}>
          <ToolbarGroup firstChild style={{ marginLeft: '5px', overflow: 'scroll' }}>
            <div
              style={stepIndex === 0 ? styles.menuItemSelected : styles.menuItem}
              onClick={() => { this.setState({ stepIndex: 0 }); }}
            >
              Home
            </div>
          </ToolbarGroup>
        </Toolbar>
        <div style={styles.container}>
            {this.getStepContent(this.state.stepIndex)}
        </div>
      </div>
    );
  }
}
