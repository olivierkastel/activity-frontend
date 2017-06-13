import { createStructuredSelector } from 'reselect';

import {
  currentActivitySelector,
} from 'selectors';

export default createStructuredSelector({
  currentActivity: currentActivitySelector,
});
