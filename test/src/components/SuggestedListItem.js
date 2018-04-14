import React from 'react';
import { connect } from 'react-redux';
import { fetchInfluencer } from '../actions/suggested';

import '../css/suggestedList.css';

export const SuggestedListItem = props => {
  return (
    <div className="SuggestedListItem">
      <img src={props.influencer_instagram_profile_image} alt="head shot of influencer" />
      <div className="SuggestedListItem__details">
        <h3>{props.influencer_full_name}</h3>
        <p>{props.influencer_instagram_username}</p>
      </div>
      <button onClick={() => props.fetchInfluencer(props.influencer_id)}>+</button>
    </div>
  );
};

export default connect(null, { fetchInfluencer })(SuggestedListItem);
