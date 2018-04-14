import React, { Component } from 'react';
import { connect } from 'react-redux';

import SuggestedListItem from './SuggestedListItem';

export class SuggestedList extends Component {
  render() {
    const influencers = this.props.suggested.map(influencer => (
      <SuggestedListItem key={influencer.influencer_id} {...influencer} />
    ));

    return (
      <div className="SuggestedList">
        <h2>Suggested Influencers</h2>
        <div className="SuggestedList-items">{influencers}</div>
      </div>
    );
  }
}

export default connect(state => ({ suggested: state.suggested }))(
  SuggestedList
);
