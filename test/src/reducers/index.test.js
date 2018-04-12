import rootReducer from './index';
import suggestedData from '../data/suggested_influencers.json';
import starredData from '../data/starred_influencers.json';

describe('rootReducer', () => {
 it('initialises the default state', () => {
   expect(rootReducer({}, {})).toEqual({ suggested: suggestedData, starred: starredData });
 });
});
