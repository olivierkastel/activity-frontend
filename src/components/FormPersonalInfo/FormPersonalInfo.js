import React, { Component } from 'react';
import PropTypes from 'prop-types';
import pureRender from 'pure-render-decorator';

// material-ui
import Paper from 'material-ui/Paper';

// custom components
import LoadingButton from 'quiver-loading-button';
import Form from 'quiver-form';

// helpers
import { formIsValid } from 'helpers/form';

// constant
import {
  NOT_NULL,
  EMAIL,
} from 'constants/regex';

// styles
import styles from './styles';

@pureRender
export default class FormPersonalInfo extends Component {
  static propTypes = {
    user: PropTypes.object,
    updateUser: PropTypes.func,
    refresh: PropTypes.func,
  };

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
    router: React.PropTypes.object,
  };

  constructor(...args) {
    super(...args);
    const { user } = this.props;
    const form = {
      firstName: {
        component: 'TextField',
        key: `firstName_${user._key}`,
        type: 'text',
        labelText: 'First Name',
        hintText: 'Enter your First Name',
        value: user.firstName,
        regex: NOT_NULL,
        regexError: 'Required',
        error: undefined,
      },
      lastName: {
        component: 'TextField',
        key: `lastName_${user._key}`,
        type: 'text',
        labelText: 'Last Name',
        hintText: 'Enter your Last Name',
        value: user.lastName,
        regex: NOT_NULL,
        regexError: 'Required',
        error: undefined,
      },
      email: {
        component: 'TextField',
        key: `email_${user._key}`,
        type: 'text',
        labelText: 'Email',
        hintText: 'Enter your email',
        value: user.email,
        regex: EMAIL,
        regexError: 'Incorrect Email',
        error: undefined,
      },
    };

    this.state = {
      buttonStatus: 'editing',
      hasChanged: false,
      isValid: true,
      form,
    };
  }

  form() {
    const { form, hasChanged, isValid, buttonStatus } = this.state;
    const { muiTheme: { rawTheme: { palette } } } = this.context;

    return (
      <div
        onKeyPress={(e) => {
          if ((e.key === 'Enter') && isValid) {
            ::this.updateUser();
          }
        }}
      >
        <Form
          muiTheme = {this.context.muiTheme}
          title = {'Personnal Info'}
          form = {form}
          save= {::this.save}
        />
        {
          hasChanged ?
          [<br />,
          <LoadingButton
            status={buttonStatus}
            style={{
              color: palette.alternateTextColor,
              opacity: isValid ? 1 : 0.5,
            }}
            disabled={!isValid}
            label="Save"
            onTouchTap={::this.updateUser}
          />] : null
        }
      </div>
    );
  }

  save(element, value) {
    const newState = this.state;
    newState.hasChanged = true;
    newState.buttonStatus = 'editing';

    // We save the value
    newState.form[element].value = value;

    // Regex validation
    if (newState.form[element].regex) {
      const valueIsValid = newState.form[element].regex.test(value);
      if (!valueIsValid) {
        newState.form[element].error = newState.form[element].regexError;
        newState.isValid = false;
      } else {
        newState.form[element].error = undefined;
        newState.isValid = formIsValid(newState.form);
      }
    }

    // we set the new state
    this.setState({ newState });
  }

  async updateUser() {
    const { form } = this.state;

    const { updateUser, refresh } = this.props;
    const body = {
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      email: form.email.value,
      password: '1234',
      role: 'ADMIN',
    };

    this.setState({ buttonStatus: 'loading' });
    const resp = await updateUser(body);
    if (resp.type === 'UPDATE_USER_ERROR') {
      this.setState({ buttonStatus: 'error' });
    } else {
      this.setState({ buttonStatus: 'success' });
      refresh();
    }
  }

  render() {
    return (
      <Paper
        style={styles.container}
      >
        {this.form()}
      </Paper>
    );
  }

}
