import { reducerFactory } from 'retax';
import { fromJS } from 'immutable';

import {
  GET_LASTWEEK_ACTIVITY,
} from 'constants/actions';

function getInitialState() {
  const lastWeek = [];

  for (let i = 0; i < 7; i++) {
    lastWeek[i] = {
      goal: 600,
      move: 0,
      exercise: 0,
      stand: 0,
    };
  }

  return lastWeek;
}

export default reducerFactory(
  getInitialState(),
  {
    [GET_LASTWEEK_ACTIVITY.SUCCESS](state, action) {
      return action.payload;
    },
  }
);
