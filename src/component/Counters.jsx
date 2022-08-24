import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {
  render() {
    const { counters, onIncrement, onDecrement, onDelete, onReset } =
      this.props;

    return (
      <React.Fragment>
        <div>{counters.length === 0 && <p>There is no counter!</p>}</div>
        <button onClick={onReset} className="btn btn-primary m-2">
          Reset
        </button>
        <table class="table">
          {counters.map((counter) => (
            <tr>
              <Counter
                key={counter.id}
                counter={counter}
                onIncrement={() => onIncrement(counter)}
                onDecrement={() => onDecrement(counter)}
                onDelete={() => onDelete(counter)}
              />
            </tr>
          ))}
        </table>
      </React.Fragment>
    );
  }
}

export default Counters;
