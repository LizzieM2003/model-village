import starredReducer from './starred';
import starredData from '../data/starred_influencers.json';

describe('starredReducer', () => {
  it('sets the initial state', () => {
    expect(starredReducer(starredData, {})).toEqual(starredData);
  });
});
