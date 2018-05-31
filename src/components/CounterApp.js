import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { incrementValue, decrementValue, resetValue } from '../actions';

class CounterApp extends React.Component {
  constructor() {
    super();
    this.incrementValue = this.incrementValue.bind(this);
    this.decrementValue = this.decrementValue.bind(this);
    this.resetValue = this.resetValue.bind(this);
  }

  incrementValue() {
    this.props.incrementValue();
  }

  decrementValue() {
    this.props.decrementValue();
  }

  resetValue() {
    if (this.props.counter !== 0) {
      this.props.resetValue();
    } else {
      // throw error
    }
  }

  render() {
    return (
      <div className="wrap">
        <h1 className="countHeading">{this.props.counter}</h1>
        <button className="button incrementBtn" onClick={this.incrementValue}>+</button>
        <button className="button decrementBtn" onClick={this.decrementValue}>-</button>
        <button className="resetBtn" onClick={this.resetValue}>Reset</button>
      </div>
    );
  }
}

CounterApp.defaultProps = {
  counter: 0,
  incrementValue: undefined,
  decrementValue: undefined,
  resetValue: undefined,
};

CounterApp.propTypes = {
  counter: PropTypes.number,
  incrementValue: PropTypes.func,
  decrementValue: PropTypes.func,
  resetValue: PropTypes.func,
};


function mapStateToProps(state) {
  return { counter: state.counter };
}

export default connect(mapStateToProps, { incrementValue, decrementValue, resetValue })(CounterApp);
