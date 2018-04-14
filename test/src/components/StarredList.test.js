import React from 'react';

import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { StarredList } from './StarredList';
import starredData from '../data/starred_influencers.json';

configure({ adapter: new Adapter() });

describe('StarredList', () => {
  const props = {
    starred: starredData
  };
  const starredList = shallow(<StarredList {...props} />);

  it('renders correctly', () => {
    expect(starredList).toMatchSnapshot();
  });

  it('has one StarredItem component for each starred influencer', () => {
    expect(starredList.find('.StarredList-items').children().length).toBe(starredData.length);
  });


});
