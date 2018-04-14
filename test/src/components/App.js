import React from 'react';
import SuggestedList from './SuggestedList';
import StarredList from './StarredList';

import '../css/app.css';

const app = () => (
    <div className="App">
        <SuggestedList />
        <StarredList />
    </div>
);

export default app;