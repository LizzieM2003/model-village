import { ADD_STARRED } from './constants';

export const fetchInfluencer = influencerId => {
  return dispatch => {
    return fetch(
      `https://my-json-server.typicode.com/LizzieM2003/model-village/influencers?influencer_id=${influencerId}`
    )
      .then(response => response.json())
      .then(json => dispatch({ type: ADD_STARRED, influencer: json[0] }));
  };
};
