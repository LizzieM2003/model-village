import React from 'react';

import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { StarredListItem } from './StarredListItem';
import { StarredList } from './StarredList';
import { removeStarred } from '../actions/starred';

configure({ adapter: new Adapter() });

describe('StarredListItem', () => {
  const influencer = {
    influencer_id: 123,
    influencer_full_name: 'Hannah Ross',
    influencer_instagram_username: 'hross64346',
    influencer_instagram_profile_image:
      'https://randomuser.me/api/portraits/women/62.jpg',
    statistics: {
      followers: 102523,
      engagement: '3.14'
    }
  };

  const mockRemoveStarred = jest.fn();

  const starredListItem = shallow(
    <StarredListItem
      key={influencer.influencer_id}
      {...influencer}
      removeStarred={mockRemoveStarred}
    />
  );

  it('renders correctly', () => {
    expect(starredListItem).toMatchSnapshot();
  });

  describe('when delete button is clicked', () => {
    

    it('calls removeStarred function', () => {
      starredListItem
        .find('.StarredListItem__container__button')
        .simulate('click');
      expect(mockRemoveStarred).toHaveBeenCalledWith(influencer.influencer_id);
    });
  });
});
