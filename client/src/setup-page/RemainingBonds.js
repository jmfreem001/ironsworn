import React from 'react';

const RemainingBonds = ({ remaining }) => {
  return (
    <div className="reamaining-bonds">
      <h3>
        Create or Reserve <span data-testid="bondsRemaining">{remaining}</span>{' '}
        more bonds.
      </h3>
    </div>
  );
};

export default RemainingBonds;
