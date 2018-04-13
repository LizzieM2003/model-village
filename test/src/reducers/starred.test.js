import starredReducer from './starred';
import * as constants from '../actions/constants';

describe('starredReducer', () => {
  const initialState = [
    {
      influencer_id: 876,
      influencer_full_name: 'Melissa Peterson',
      influencer_instagram_username: 'melissa_peterson',
      influencer_instagram_profile_image:
        'https://randomuser.me/api/portraits/women/84.jpg',
      statistics: {
        followers: 5122,
        engagement: '5.23'
      }
    },
    {
      influencer_id: 765,
      influencer_full_name: 'Kathryn Smith',
      influencer_instagram_username: 'kat_smith',
      influencer_instagram_profile_image:
        'https://randomuser.me/api/portraits/women/71.jpg',
      statistics: {
        followers: 7161,
        engagement: '2.36'
      }
    }
  ];

  it('sets the initial state', () => {
    expect(starredReducer(initialState, {})).toEqual(initialState);
  });

  it('adds a new star influencer', () => {
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

    expect(
      starredReducer(initialState, { type: constants.ADD_STARRED, influencer })
        .length
    ).toBe(3);
  });

  it('removes a star influencer', () => {
    const influencer = {
      influencer_id: 876,
      influencer_full_name: 'Melissa Peterson',
      influencer_instagram_username: 'melissa_peterson',
      influencer_instagram_profile_image:
        'https://randomuser.me/api/portraits/women/84.jpg',
      statistics: {
        followers: 5122,
        engagement: '5.23'
      }
    };
    expect(
      starredReducer(initialState, {
        type: constants.REMOVE_STARRED,
        influencer
      }).length
    ).toBe(1);
  });

  it('sorts the starred influencers by followers', () => {
    const sortBy = {
      field: constants.FOLLOWERS,
      order: constants.DESC
    };

    expect(
      starredReducer(initialState, { type: constants.SORT_STARRED, sortBy })[0]
        .influencer_id
    ).toBe(765);
  });

  it('sorts the starred influencers by engagement', () => {
    const sortBy = {
      field: constants.ENGAGEMENT,
      order: constants.DESC
    };

    expect(
      starredReducer(initialState, { type: constants.SORT_STARRED, sortBy })[0]
        .influencer_id
    ).toBe(876);
  });
});
