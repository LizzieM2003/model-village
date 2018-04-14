import React from 'react';

import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { SuggestedListItem } from './SuggestedListItem';

configure({ adapter: new Adapter() });

describe('SuggestedListItem', () => {
  const suggstedListItem = shallow(<SuggestedListItem />);

  it('renders correctly', () => {
    expect(SuggestedListItem).toMatchSnapshot();
  });
});
