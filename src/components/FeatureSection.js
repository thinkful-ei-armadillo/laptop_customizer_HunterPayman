import React from 'react';
import FeatureItem from './FeatureItem';

export default function FeatureSection(props) {
  function generateOptions() {
    const options = props.options.map((item, index) => {
      const selectedClass =
        item.name === props.selected.name ? 'feature__selected' : '';
      const featureClass = 'feature__option ' + selectedClass;

      return (
        <FeatureItem
          onClick={props.onClick}
          item={item}
          section={props.id}
          key={index}
          featureClass={featureClass}
        />
      );
    });
    return options;
  }
  return (
    <div className="feature">
      <div className="feature__name">{props.id}</div>
      <ul className="feature__list">{generateOptions()}</ul>
    </div>
  );
}
