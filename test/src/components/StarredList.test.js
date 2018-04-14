import React from 'react';

import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { StarredList } from './StarredList';
import starredData from '../data/starred_influencers.json';

import { ENGAGEMENT, DESC } from '../actions/constants';

configure({ adapter: new Adapter() });

describe('StarredList', () => {
  const mockSortStarred = jest.fn();

  const props = {
    starred: starredData,
    sortStarred: mockSortStarred
  };

  const starredList = shallow(<StarredList {...props} />);

  it('renders correctly', () => {
    expect(starredList).toMatchSnapshot();
  });

  it('has one StarredItem component for each starred influencer', () => {
    expect(starredList.find('.StarredList-items').children().length).toBe(
      starredData.length
    );
  });

  it('contains a sort by dropdown', () => {
    expect(starredList.find('.StarredList__dropdown').exists()).toBe(true);
  });

  it('changes the sort order when select dropdown option', () => {
    starredList
      .find('.StarredList__dropdown')
      .simulate('change', { target: { value: `${ENGAGEMENT} ${DESC}` } });
    expect(mockSortStarred).toHaveBeenCalled();
  });
});
