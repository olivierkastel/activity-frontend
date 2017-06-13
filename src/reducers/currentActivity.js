import { reducerFactory } from 'retax';
import { fromJS } from 'immutable';

import {
  GET_CURRENT_ACTIVITY,
} from 'constants/actions';

function getInitialState() {
  return {
    goal: 600,
    move: 0,
    exercise: 0,
    stand: 0,
  };
}

export default reducerFactory(
  getInitialState(),
  {
    [GET_CURRENT_ACTIVITY.SUCCESS](state, action) {
      return action.payload;
    },
  }
);
