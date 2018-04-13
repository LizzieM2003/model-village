import * as constants from './constants';

export const addStarred = influencer => ({
  type: constants.ADD_STARRED,
  influencer
});

export const removeStarred = influencer => ({
  type: constants.REMOVE_STARRED,
  influencer
});

export const sortStarred = sortBy => ({
  type: constants.SORT_STARRED,
  sortBy
});
