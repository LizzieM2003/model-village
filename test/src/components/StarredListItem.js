import React from 'react';
import { connect } from 'react-redux';
import { addStarred, removeStarred } from '../actions/starred';

import '../css/starredList.css';

export const StarredListItem = props => {
  return (
    <div className="StarredListItem__container">
      <div className="StarredListItem">
        <img
          src={props.influencer_instagram_profile_image}
          alt="profile image"
        />
        <div className="StarredListItem__details">
          <h3>{props.influencer_full_name}</h3>
          <p>{props.influencer_instagram_username}</p>
        </div>
        <div className="StarredListItem__followers">
          <p>{props.statistics.followers}</p>
          followers
        </div>
        <div className="StarredListItem__engagement">
          <p>{props.statistics.engagement}%</p>
          engagement
        </div>
      </div>
      <button className="StarredListItem__container__button" onClick={() => props.removeStarred(props.influencer_id)}>x</button>
    </div>
  );
};

export default connect(null, { addStarred, removeStarred })(StarredListItem);
