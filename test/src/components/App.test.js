import React from 'react';

import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App';

configure({ adapter: new Adapter() });

const app = shallow(<App />);

describe('App', () => {
  it('renders correctly', () => {
    expect(app).toMatchSnapshot();
  });

  it('contains a connected SuggestedList component', () => {
    // console.log(app.debug());
    expect(app.find('Connect(SuggestedList)').exists()).toBe(true);
  });

  it('contains a connect StarredList component', () => {
    expect(app.find('Connect(StarredList)').exists()).toBe(true);
  });
});
