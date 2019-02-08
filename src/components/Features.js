import React, { Component } from 'react';
import FeatureSection from './FeatureSection';
import './Feature.css';

class Features extends Component {
  convertFeatures() {
    let features = this.props.features;
    return Object.keys(features).map(key => {
      return (
        <FeatureSection
          onClick={this.props.onClick}
          options={this.props.features[key]}
          selected={this.props.selected[key]}
          id={key}
          key={key}
        />
      );
    });
  }

  render() {
    return this.convertFeatures();
  }
}

export default Features;
