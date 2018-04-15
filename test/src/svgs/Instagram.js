import React from 'react';

const instagram = props => {
  return (
    <svg
      style={{
        width: props.width,
        height: props.height,
        overflow: 'hidden',
        fill: props.color,
        marginRight: '5px'
      }}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <symbol id="icon-instagram" viewBox="0 0 24 24">
          <path d="M17 1h-10c-3.3 0-6 2.7-6 6v10c0 3.3 2.7 6 6 6h10c3.3 0 6-2.7 6-6v-10c0-3.3-2.7-6-6-6zM21 17c0 2.2-1.8 4-4 4h-10c-2.2 0-4-1.8-4-4v-10c0-2.2 1.8-4 4-4h10c2.2 0 4 1.8 4 4v10z" />
          <path d="M12.8 7c-0.5-0.1-1-0.1-1.5 0-2.7 0.4-4.6 3-4.2 5.7 0.2 1.3 0.9 2.5 2 3.3 0.9 0.6 1.9 1 3 1 0.2 0 0.5 0 0.7-0.1 1.3-0.2 2.5-0.9 3.3-2s1.1-2.4 0.9-3.7c-0.3-2.2-2-3.9-4.2-4.2zM14.5 13.7c-0.5 0.6-1.2 1.1-2 1.2-1.6 0.2-3.2-0.9-3.4-2.5-0.3-1.6 0.9-3.2 2.5-3.4 0.1 0 0.3 0 0.4 0s0.3 0 0.4 0c1.3 0.2 2.3 1.2 2.5 2.5 0.2 0.8 0 1.6-0.4 2.2z" />
          <path d="M16.8 5.8c-0.2 0.2-0.3 0.4-0.3 0.7s0.1 0.5 0.3 0.7c0.2 0.2 0.5 0.3 0.7 0.3 0.3 0 0.5-0.1 0.7-0.3s0.3-0.5 0.3-0.7c0-0.3-0.1-0.5-0.3-0.7-0.4-0.4-1-0.4-1.4 0z" />
        </symbol>
      </defs>
      <use xlinkHref="#icon-instagram" />
    </svg>
  );
};

export default instagram;
