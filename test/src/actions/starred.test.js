import * as constants from './constants';
import * as actions from './starred';

describe('starred influencer actions', () => {
  let influencer;

  beforeEach(() => {
    influencer = {
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
  });

  it('creates an action to add a starred influencer', () => {
    const expectedAction = { type: constants.ADD_STARRED, influencer };
    expect(actions.addStarred(influencer)).toEqual(expectedAction);
  });

  it('creates an action to remove a starred influencer', () => {
    const influencer_id = influencer.influencer_id;

    const expectedAction = {
      type: constants.REMOVE_STARRED,
      influencer_id
    };
    expect(actions.removeStarred(influencer_id)).toEqual(expectedAction);
  });

  it('creates an action to sort starred influencers', () => {
    const sortBy = {
      field: constants.ENGAGEMENT,
      order: constants.ASC
    };
    const expectedAction = { type: constants.SORT_STARRED, sortBy };
    expect(actions.sortStarred(sortBy)).toEqual(expectedAction);
  });
});
