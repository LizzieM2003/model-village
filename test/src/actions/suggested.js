import { addStarred } from './starred';

export const fetchInfluencer = influencerId => {
  return dispatch => {
    return (
      fetch(
        `https://my-json-server.typicode.com/LizzieM2003/model-village/influencers?influencer_id=${influencerId}`
      )
        .then(response => response.json())
        .then(json => dispatch(addStarred(json[0])))
    );
  };
};
