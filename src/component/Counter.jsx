import React, { Component } from "react";

class Counter extends Component {
  render() {
    const { counter, onIncrement, onDecrement, onDelete } = this.props;

    return (
      <div className="row">
        <td className="col-1">
          <span className={this.classes(counter)}>
            {this.formatCount(counter)}
          </span>
        </td>

        <td className="col">
          <button className="btn btn-secondary m-2" onClick={onIncrement}>
            +
          </button>

          <button className={this.activeButton(counter)} onClick={onDecrement}>
            -
          </button>

          <button className="btn btn-danger" onClick={onDelete}>
            Delete
          </button>
        </td>
      </div>
    );
  }

  activeButton(counter) {
    let classes = "btn btn-secondary m-2 ";
    if (counter.value === 0) classes += "disabled";
    return classes;
  }

  formatCount(counter) {
    if (counter.value === 0) return "Zero";
    return counter.value;
  }

  classes(counter) {
    let classes = "badge   m-2  badge-";
    classes += counter.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
