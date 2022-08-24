import React, { Component } from "react";
import Counters from "./component/Counters";
import NavBar from "./component/NavBar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleIncrement = (counter) => {
    let counters = this.state.counters;
    let index = counters.indexOf(counter);
    counters[index].value += 1;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    let counters = this.state.counters;
    let index = counters.indexOf(counter);
    if (counter.value > 0) counters[index].value -= 1;
    this.setState({ counters });
  };

  handleDelete = (counter) => {
    let counters = this.state.counters.filter((c) => c.id !== counter.id);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <NavBar counters={this.state.counters} />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
          />
        </main>
      </div>
    );
  }
}

export default App;
