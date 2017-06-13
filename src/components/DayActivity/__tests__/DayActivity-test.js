import chai, { expect } from 'chai';
import dirtyChai from 'dirty-chai';
chai.use(dirtyChai);

import { shallow } from 'enzyme';

import React from 'react';

describe('DayActivity', () => {
  it('should exists', () => {
    const DayActivity = require('../DayActivity');

    const wrapper = shallow((
      <DayActivity />
    ));

    expect(wrapper).to.have.length(1);
  });

  it('should render inner components', () => {
    const DayActivity = require('../DayActivity');

    const wrapper = shallow((
      <DayActivity />
    ));

    expect(wrapper.find('div')).to.have.length(1);
  });
});
