import React, { Component } from 'react';
import PropTypes from 'prop-types';
import pureRender from 'pure-render-decorator';

// custom components
import ActivityCircle from 'react-activity-circle';

// styles
import styles from './styles';

@pureRender
export default class DayActivity extends Component {
  static propTypes = {
    day: PropTypes.string,
    activity: PropTypes.object,
  };

  render() {
    const { day, activity } = this.props;
    return (
      <div>
        <h2>{day}</h2>
          <div
            style={styles.container}
          >
            <div
              style={styles.subContainer}
            >
              <div
                style={{
                  float: 'left',
                }}
              >
                <ActivityCircle
                  {...activity}
                />
              </div>
              <div
                style={styles.infoContainer}
              >
                <div
                  style={styles.move}
                >
                  Move<br />
                <span style={{ color: '#DC1041', fontSize: 30 }}>
                  {activity.move}/{activity.goal}
                </span>
                </div><br />
              <div>
                <div
                  style={styles.exercise}
                >
                  Exercise<br />
                <span style={{ color: '#92DD08', fontSize: 30 }}>{activity.exercise}/30mn</span>
                </div>
                <div
                  style={styles.stand}
                >
                  Stand<br />
                <span style={{ color: '#80E5FF', fontSize: 30 }}>{activity.stand}/12hrs</span>
                </div>
              </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}
