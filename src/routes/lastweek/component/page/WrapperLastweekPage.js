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
export default class WrapperLastWeekPage extends Component {
  static propTypes = {
    lastWeekActivity: PropTypes.object,
  };

  constructor(...args) {
    super(...args);
    this.state = {
      stepIndex: 0,
    };
  }

  getDate(date) {
    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    const yyyy = date.getFullYear();

    if (dd < 10) {
      dd = `0${dd}`;
    }

    if (mm < 10) {
      mm = `0${mm}`;
    }

    return `${mm}/${dd}/${yyyy}`;
  }

  getLastWeekActivity() {
    const { lastWeekActivity } = this.props;
    const JSX = [];

    let i = 1;
    for (const k in lastWeekActivity) {
      if (lastWeekActivity.hasOwnProperty(k)) {
        const activity = lastWeekActivity[k];
        const d = new Date();
        d.setDate(d.getDate() - i);
        i ++;
        JSX.push(
          <DayActivity
            day = {this.getDate(d)}
            activity = {activity}
          />
        );
      }
    }

    return JSX;
  }

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <div>
            <h1>Your Last Week Activity</h1>
            { this.getLastWeekActivity() }
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
