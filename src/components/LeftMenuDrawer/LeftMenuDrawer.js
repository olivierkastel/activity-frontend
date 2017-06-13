import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';

import pureRender from 'pure-render-decorator';
import LinksList from 'components/LinksList';

@pureRender
export default class LeftMenuDrawer extends Component {
  static propTypes = {
    open: PropTypes.bool,
    isMobile: PropTypes.bool,
    menuItems: PropTypes.array.isRequired,
    onClose: PropTypes.func.isRequired,
    onLinkTouch: PropTypes.func.isRequired,
  };

  static contextTypes = {
    currentAccessLevel: PropTypes.object,
  };

  static defaultProps = {
    menuItems: [],
  };

  constructor(...args) {
    super(...args);

    this._onRequestChange = ::this._onRequestChange;
    this._onLinkTouch = ::this._onLinkTouch;
  }

  _onRequestChange(request) {
    if (!request) {
      this.props.onClose();
    }
  }

  _onLinkTouch(url) {
    this.props.onClose();
    this.props.onLinkTouch(url);
  }

  render() {
    const { open, menuItems, isMobile } = this.props;
    const { currentAccessLevel } = this.context;

    return (
        <Drawer
          open={open}
          docked={!isMobile}
          onRequestChange={this._onRequestChange}
        >
          <div
            style={{
              background: '#FAFAFA',
              minHeight: '100%',
            }}
          >
            <AppBar title="Activity" showMenuIconButton={false} />
            <LinksList
              links={menuItems}
              onLinkTouch={this._onLinkTouch}
              currentAccessLevel={currentAccessLevel}
            />
          </div>
        </Drawer>
    );
  }
}
