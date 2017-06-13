import { createSelector } from 'reselect';

export function lastWeekActivitySelector(state) {
  return state.lastWeekActivity;
}

export const lastWeekActivityValueSelector = createSelector(
  lastWeekActivitySelector,
  lastWeekActivity => lastWeekActivity
);
