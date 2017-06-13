import { LASTWEEK } from 'constants/routes';

export default function getRoute(requireAuthFunctions) {
  return {
    path: LASTWEEK,
    onEnter: requireAuthFunctions.user,

    getComponent(location, callback) {
      require.ensure([], require => {
        const container = require('routes/lastweek/container/page');
        callback(null, container);
      });
    },
  };
}
