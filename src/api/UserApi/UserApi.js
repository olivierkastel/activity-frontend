import { annotator, AbstractApi } from 'retax-components';

@annotator.Api({ // eslint-disable-line
  routes: {
    users: '/v2/users',
    sessions: '/v2/sessions',
    activity: '/v2/activity',
  },
})
export default class UserApi extends AbstractApi {

  // User
  getCurrent() {
    return this.get({ url: `${this.routes.sessions}/me` });
  }

  // Apps
  getApps() {
    return this.get({ url: `${this.routes.apps}` });
  }

  getCurrentActivity() {
    return this.get({ url: `${this.routes.activity}/current` });
  }

  getLastWeekActivity() {
    return this.get({ url: `${this.routes.activity}/lastweek` });
  }

}
