import React, { Component } from 'react';
import Total from './Total';
import './Summary.css';

class Summary extends Component {
  generateSummary() {
    return Object.keys(this.props.selected).map(key => (
      <div className="summary__option" key={key}>
        <div className="summary__option__label">{key} </div>
        <div className="summary__option__value">
          {this.props.selected[key].name}
        </div>
        <div className="summary__option__cost">
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
          }).format(this.props.selected[key].cost)}
        </div>
      </div>
    ));
  }

  generateTotal() {
    return Object.keys(this.props.selected).reduce(
      (acc, curr) => acc + this.props.selected[curr].cost,
      0
    );
  }

  render() {
    const total = this.generateTotal();
    return (
      <section className="main__summary">
        <h3>NEW GREENLEAF 2018</h3>
        {this.generateSummary()}
        <div className="summary__total">
          <div className="summary__total__label">Your Price: </div>
          <Total total={total} />
        </div>
      </section>
    );
  }
}

export default Summary;
