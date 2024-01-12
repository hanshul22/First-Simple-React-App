import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  inceaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decreaseCount = () => {
    if (this.state.count > 0)
    this.setState({ count: this.state.count - 1 });
  };
  resetCount = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div>
        <div>
          <h1>Counter App</h1>
        </div>

        <div><p>{this.state.count}</p></div>

        <div className="count">
          <button className="btn" onClick={this.inceaseCount}>+</button>
          <button className="btn" onClick={this.decreaseCount}>-</button>
          <button onClick={this.resetCount}>Reset</button>
        </div>
      </div>
    );
  }
}
export default App;
