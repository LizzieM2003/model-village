import * as constants from './constants';

export const addStarred = influencer => ({
  type: constants.ADD_STARRED,
  influencer
});

export const removeStarred = influencer_id => ({
    type: constants.REMOVE_STARRED,
    influencer_id
});

export const sortStarred = sortBy => ({
  type: constants.SORT_STARRED,
  sortBy
});
