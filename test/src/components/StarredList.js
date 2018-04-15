import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sortStarred } from '../actions/starred';

import StarredListItem from './StarredListItem';
import { FOLLOWERS, ENGAGEMENT, ASC, DESC } from '../actions/constants';

export class StarredList extends Component {
  dropdownChangedHandler = event => {
    const sortBy = {
      field: '',
      order: ''
    };

    if (event.target.value) {
      const sortByArr = event.target.value.split(' ');
      sortBy.field = sortByArr[0];
      sortBy.order = sortByArr[1];
    }

    this.props.sortStarred(sortBy);
  };

  render() {
    const influencers = this.props.starred.map(influencer => (
      <StarredListItem key={influencer.influencer_id} {...influencer} />
    ));

    return (
      <div className="StarredList">
        <div className="StarredList__header">
          <h2>Starred Influencers</h2>
          <label>
            Sort By:{' '}
            <select
              className="StarredList__dropdown"
              onChange={this.dropdownChangedHandler}
            >
              <option value="" disabled selected>
                Sort by
              </option>
              <option value={`${FOLLOWERS} ${ASC}`}>
                Followers (Low to High)
              </option>
              <option value={`${FOLLOWERS} ${DESC}`}>
                Followers (High to Low)
              </option>
              <option value={`${ENGAGEMENT} ${ASC}`}>
                Engagement (Low to High)
              </option>
              <option value={`${ENGAGEMENT} ${DESC}`}>
                Engagement (High to Low)
              </option>
            </select>
          </label>
        </div>
        <div className="StarredList-items">{influencers}</div>
      </div>
    );
  }
}

export default connect(state => ({ starred: state.starred }), { sortStarred })(
  StarredList
);
