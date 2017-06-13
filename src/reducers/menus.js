import { reducerFactory } from 'retax';

import {
  SIGNIN,
  USER,
  LASTWEEK,
} from 'constants/routes';
import { accessLevels } from 'config/access';

export default reducerFactory(
  [
    {
      icon: 'account_circle',
      label: 'Sign In',
      url: SIGNIN,
      accessLevel: accessLevels.anon,
    },
    {
      icon: 'accessibility',
      label: 'Your Activity',
      url: USER,
      accessLevel: accessLevels.user,
      withDivider: true,
    },
    {
      icon: 'directions_run',
      label: 'Last Week',
      url: LASTWEEK,
      accessLevel: accessLevels.user,
      withDivider: true,
    },
  ],
  {}
);
