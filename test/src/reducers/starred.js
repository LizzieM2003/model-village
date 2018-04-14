import starredData from '../data/starred_influencers.json';
import * as constants from '../actions/constants';

const sortInfluencers = (influencers, { field, order }) => {
  const ascOrder = fieldName => (a, b) =>
    a.statistics[fieldName] - b.statistics[fieldName];

  const descOrder = fieldName => (a, b) =>
    b.statistics[fieldName] - a.statistics[fieldName];

  let fieldName = '';
  if (field === constants.FOLLOWERS) {
    fieldName = 'followers';
  } else if (field === constants.ENGAGEMENT) {
    fieldName = 'engagement';
  }

  switch (order) {
    case constants.ASC:
      return influencers.sort(ascOrder(fieldName));
    case constants.DESC:
      return influencers.sort(descOrder(fieldName));
    default:
      return influencers;
  }
};

export default function(state = starredData, action) {
  switch (action.type) {
    case constants.ADD_STARRED:
      return [...state, action.influencer];
    case constants.REMOVE_STARRED:
      return state.filter(influencer => influencer.influencer_id !== action.influencer_id);
    case constants.SORT_STARRED:
      return sortInfluencers([...state], action.sortBy);
    default:
      return state;
  }
}
