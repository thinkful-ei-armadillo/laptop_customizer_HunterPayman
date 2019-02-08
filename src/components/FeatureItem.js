import React from 'react';

export default function FeatureItem(props) {
  return (
    <li className="feature__item">
      <div
        className={props.featureClass}
        onClick={(section, item) => props.onClick(props.section, props.item)}
      >
        {props.item.name}(
        {new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD'
        }).format(props.item.cost)}
        )
      </div>
    </li>
  );
}
