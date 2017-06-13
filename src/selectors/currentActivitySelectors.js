import { createSelector } from 'reselect';

export function currentActivitySelector(state) {
  return state.currentActivity;
}

export const currentActivityValueSelector = createSelector(
  currentActivitySelector,
  currentActivity => currentActivity
);
