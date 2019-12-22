import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value,
  //   imgUrl: "https://picsum.photos/200",
  //   tags: ["t1", "t2", "t3"]
  // };
  //   constructor() {
  //     super();
  //     console.log("con", this);
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }
  //   handleIncrement() {
  //     console.log("clicked", this);
  //   }
  // handleIncrement = product => {
  //   console.log("clicked", this);
  //   // this.state.count++; //not work
  //   this.setState({ value: this.state.value + 1 });
  // };

  render() {
    console.log(this.props);
    return (
      <div>
        {/* <img src={this.state.imgUrl} /> */}
        <span
          style={{
            fontSize: 20,
            fontWeight: "bold"
          }}
          className={this.getBadgeClasses()}
        >
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondry btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete!
        </button>

        {/* <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul> */}
      </div>
    );
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
