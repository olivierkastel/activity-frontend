import chai, { expect } from 'chai';
import mockery from 'mockery';
import dirtyChai from 'dirty-chai';
chai.use(dirtyChai);

import { shallow } from 'enzyme';

import React from 'react';

describe('LastweekPage', () => {
  beforeEach(() => {
    mockery.enable({
      warnOnReplace: false,
      warnOnUnregistered: false,
      useCleanCache: true,
    });
    mockery.registerMock(
      'decorators',
      require('helpers/test/decoratorsMock')
    );
    mockery.registerMock(
      'components/WrapperLastweekPage ',
      require('helpers/test/componentsMock').WrapperLastweekPage
    );
    mockery.registerMock(
      'react-redux',
      require('helpers/test/reactReduxMock')
    );
  });

  afterEach(() => {
    mockery.deregisterMock('decorators');
    mockery.deregisterMock('components/WrapperLastweekPage');
    mockery.deregisterMock('react-redux');
    mockery.disable();
  });

  it('should exists', () => {
    const LastweekPage = require('../LastweekPage');

    const wrapper = shallow((
      <LastweekPage />
    ));

    expect(wrapper).to.have.length(1);
  });

  it('should render inner components', () => {
    const LastweekPage = require('../LastweekPage');

    const wrapper = shallow((
      <LastweekPage />
    ));

    expect(wrapper.find('WrapperLastweekPage')).to.have.length(1);
  });
});
