import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 1 },
      { id: 3, value: 2 },
      { id: 4, value: 3 }
    ]
  };
  handleDelete = counterId => {
    console.log(counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };
  handleIncrement = counter => {
    const c = [...this.state.counters];
    c[counter.id] = counter.value++;
    //console.log(this.state.counters[0]);
    this.setState({ c });
  };
  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  cart() {
    console.log(this.state.counters.reduce((a, b) => a.value + b.value, 0));
    // return this.state.counters.reduce((a, b) => a + b, 0);
    // return [1, 2, 3, 4].reduce((a, b) => a + b, 0);
    return this.state.counters.reduce((a, b) => a + (b.value || 0), 0);
  }
  render() {
    return (
      <div>
        <span className="btn btn-primary btn-sm m-2">{this.cart()}</span>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            value={counter.value}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
