import React from 'react';

import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { SuggestedListItem } from './SuggestedListItem';

configure({ adapter: new Adapter() });

describe('SuggestedListItem', () => {
  const influencer = {
    "influencer_id": 123,
    "influencer_full_name": "Hannah Ross",
    "influencer_instagram_username": "hross64346",
    "influencer_instagram_profile_image":
      "https://randomuser.me/api/portraits/women/62.jpg"
  };

  const mockFetchInfluencer = jest.fn();

  const props = {
    ...influencer,
    starred: [],
    fetchInfluencer: mockFetchInfluencer
  };

  const suggestedListItem = shallow(<SuggestedListItem {...props} />);

  it('renders correctly', () => {
    expect(suggestedListItem).toMatchSnapshot();
  });

  describe('when clicking on add button', () => {
    beforeEach(() => {
      suggestedListItem.find('.SuggestedListItem__button').simulate('click');
    });

    it('should execute fetchInfluencer', () => {
      expect(mockFetchInfluencer).toHaveBeenCalledWith(influencer.influencer_id);
    });

  });

});
