import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import { reduxForm } from 'redux-form';
import logo from 'images/logo.png';
import pureRender from 'pure-render-decorator';
import validate from './validationRules';
import * as Colors from 'material-ui/styles/colors';
import styles from './styles';

const fields = ['email', 'password'];

@pureRender
@reduxForm({
  form: 'login',
  fields,
  validate,
})
export default class LoginForm extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func,
    resetForm: PropTypes.func,

    onSubmit: PropTypes.func,
  };

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
    router: React.PropTypes.object,
  };

  static defaultProps = {
    fields: {},
  };

  render() {
    const { fields: { email, password } } = this.props;
    const { handleSubmit, resetForm } = this.props;

    const { muiTheme: { rawTheme: { palette } } } = this.context;

    return (
      <div style={{ textAlign: 'center' }}>
        <img
          style={{ width: '100px' }}
          src={ logo }
        /><br /><br />
        <form
          style={styles.form}
          className="flex layout vertical around-justified"
          onSubmit={handleSubmit}
          onReset={resetForm}
        >
          <TextField
            id="loginform-input-1"
            type="text"
            hintText="Username"
            errorText={email.value ? email.error : undefined}
            {...email}
          />

          <TextField
            id="loginform-input-2"
            type="password"
            hintText="Password"
            errorText={password.value ? password.error : undefined}
            {...password}
          />
          <br /><br /><br />
          <div className="layout horizontal around-justified">
            <FlatButton
              label="Cancel"
              backgroundColor={Colors.grey300}
              hoverColor={Colors.grey400}
              style={{ color: palette.textColor }}
              label="Cancel"
              primary
              type="reset"
            />
            <FlatButton
              style={{ color: palette.alternateTextColor }}
              backgroundColor={palette.accent1Color}
              hoverColor={palette.accent3Color}
              label="Submit"
              primary
              type="submit"
            />
          </div>
        </form>
      </div>
    );
  }
}
