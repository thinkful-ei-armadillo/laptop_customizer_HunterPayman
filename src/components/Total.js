import React from 'react';
import './Total.css';

function Total(props) {
  return (
    <div className="summary__total__value">
      {new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(props.total)}
    </div>
  );
}

export default Total;
