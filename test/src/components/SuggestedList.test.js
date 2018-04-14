import React from 'react';

import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { SuggestedList } from './SuggestedList';
import suggestedData from '../data/suggested_influencers.json';

configure({ adapter: new Adapter() });

describe('SuggestedList', () => {
  const mockFetchInfluencer = jest.fn();
  const props = {
    suggested: suggestedData
  };
  const suggestedList = shallow(<SuggestedList {...props} />);

  it('renders correctly', () => {
    expect(suggestedList).toMatchSnapshot();
  });

  it('has one SuggestedItem component for each suggested influencer', () => {
    expect(suggestedList.find('.SuggestedList-items').children().length).toBe(3);
  });
});
