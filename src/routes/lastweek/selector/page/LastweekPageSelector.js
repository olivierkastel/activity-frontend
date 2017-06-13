import { createStructuredSelector } from 'reselect';

import {
  lastWeekActivitySelector,
} from 'selectors';

export default createStructuredSelector({
  lastWeekActivity: lastWeekActivitySelector,
});
