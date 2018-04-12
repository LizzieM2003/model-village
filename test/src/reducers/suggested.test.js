import suggestedReducer from './suggested';
import suggestedData from '../data/suggested_influencers.json';

describe('suggestedReducer', () => {
  it('sets the initial state', () => {
    expect(suggestedReducer(suggestedData, {})).toEqual(suggestedData);
  });
});
