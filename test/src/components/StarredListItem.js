import React from 'react';
import { connect } from 'react-redux';
import { addStarred, removeStarred } from '../actions/starred';
import InstagramSVG from '../svgs/Instagram';

import '../css/starredList.css';

export const StarredListItem = props => {
  const styles = {
    color: '#a9a9a9',
    fontSize: '14px',
    display: 'flex',
    alignItems: 'center',
    marginTop: '10px'
  };

  return (
    <div className="StarredListItem__container">
      <div className="StarredListItem">
        <img
          src={props.influencer_instagram_profile_image}
          alt="head shot of influencer"
        />
        <div className="StarredListItem__details">
          <h3>{props.influencer_full_name}</h3>
          <p style={styles}>
            <InstagramSVG
              color={styles.color}
              height={styles.fontSize}
              width={styles.fontSize}
            />
            {props.influencer_instagram_username}
          </p>
        </div>
        <div className="StarredListItem__followers">
          <h3>{props.statistics.followers.toLocaleString()}</h3>
          <p>Followers</p>
        </div>
        <div className="StarredListItem__engagement">
          <h3>{props.statistics.engagement}%</h3>
          <p>Engagement</p>
        </div>
      </div>
      <button
        className="StarredListItem__container__button"
        onClick={() => props.removeStarred(props.influencer_id)}
      >
        x
      </button>
    </div>
  );
};

export default connect(null, { addStarred, removeStarred })(StarredListItem);
