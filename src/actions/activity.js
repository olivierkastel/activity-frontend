import { actionsCreatorFactory } from 'retax';
import { annotator, AbstractActionsCreator } from 'retax-components';

import UserApi from 'api/UserApi';
import {
  GET_CURRENT_ACTIVITY,
  GET_LASTWEEK_ACTIVITY,
} from 'constants/actions';

@annotator.ActionsCreator({ // eslint-disable-line
  apis: {
    userApi: UserApi,
  },
})
export default class ActivityActionsCreator extends AbstractActionsCreator {

  @annotator.action()
  getCurrentActivity = actionsCreatorFactory(
    GET_CURRENT_ACTIVITY.value,
    () => ({ asyncAwait: this.apis.userApi.getCurrentActivity() })
  );

  @annotator.action()
  getLastWeekActivity = actionsCreatorFactory(
    GET_LASTWEEK_ACTIVITY.value,
    () => ({ asyncAwait: this.apis.userApi.getLastWeekActivity() })
  );

}
