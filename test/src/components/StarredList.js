import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sortStarred } from '../actions/starred';

import StarredListItem from './StarredListItem';

export class StarredList extends Component {
  render() {
    const influencers = this.props.starred.map(influencer => (
      <StarredListItem key={influencer.influencer_id} {...influencer} />
    ));
    return (
      <div className="StarredList">
        <h2>Starred Influencers</h2>
        <div className="StarredList-items">{influencers}</div>
      </div>
    );
  }
}

export default connect(state => ({ starred: state.starred }), { sortStarred })(
  StarredList
);
