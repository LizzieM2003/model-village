// https://my-json-server.typicode.com/LizzieM2003/model-village/influencers?influencer_id=234

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import { ADD_STARRED } from './constants';
import { fetchInfluencer } from './suggested';

const createMockStore = configureMockStore([thunk]);
const store = createMockStore({ starred: [] });
const mockResponse = [
  {
    influencer_id: 234,
    influencer_full_name: 'Emily White',
    influencer_instagram_username: 'emwhite',
    influencer_instagram_profile_image:
      'https://randomuser.me/api/portraits/women/14.jpg',
    statistics: {
      followers: 6397,
      engagement: '4.65'
    }
  }
];

fetchMock.get(
  'https://my-json-server.typicode.com/LizzieM2003/model-village/influencers?influencer_id=234',
  mockResponse
);

it('creates an async action to fetch a suggested influencer', () => {
  const expectedActions = [{ type: ADD_STARRED, influencer: mockResponse[0] }];
  const influencerId = 234;
  return store.dispatch(fetchInfluencer(influencerId)).then(() => {
    expect(store.getActions()).toEqual(expectedActions);
  });
});
