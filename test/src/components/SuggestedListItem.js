import React from 'react';
import { connect } from 'react-redux';
import { fetchInfluencer } from '../actions/suggested';

import '../css/suggestedList.css';

export const SuggestedListItem = props => {
  const disableButton = influencer_id => {
    // if influencer is in starred influencers list then it
    // shouldn't be added again

    const influencerArr = props.starred.filter(
      influencer => influencer.influencer_id === influencer_id
    );

    // if above array length > 0 then disable button
    if (influencerArr.length) {
      return true;
    }

    return false;
  };

  return (
    <div className="SuggestedListItem">
      <img
        src={props.influencer_instagram_profile_image}
        alt="head shot of influencer"
      />
      <div className="SuggestedListItem__details">
        <h3>{props.influencer_full_name}</h3>
        <p>{props.influencer_instagram_username}</p>
      </div>
      <button className="SuggestedListItem__button"
        disabled={disableButton(props.influencer_id)}
        onClick={() => props.fetchInfluencer(props.influencer_id)}
      >
        +
      </button>
    </div>
  );
};

export default connect(state => ({ starred: state.starred }), {
  fetchInfluencer
})(SuggestedListItem);
