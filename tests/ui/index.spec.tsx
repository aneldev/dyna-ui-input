import 'jsdom-global/register';
import {configure} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

import * as React from 'react';
import * as enzyme from 'enzyme';

import {DynaInput} from './../../src';

describe('Home', () => {
  let wrapper;

  it('has expected content with deep render', () => {
    wrapper = enzyme.shallow(
      <DynaInput
        name="userName"
        value="John"
      />,
      {}
    );

    expect(wrapper).toMatchSnapshot();
  });
});
