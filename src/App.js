import React from 'react';
import Counter from './components/Counter';

class App extends React.Component {
  constructor() {
    super();
    // initial state
    this.state = {
      count: 0,
    };
  }

  // custom function = handleBtnMinus method allows us to decrement
  handleMinusBtn = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  // custom function = handleBtnPlus method allows us to increment
  handlePlusBtn = () => {
    if (this.state.count < 100) {
      this.setState({ count: this.state.count + 1 });
    }
  };

  render() {
    return (
      <div>
        <Counter
          count={this.state.count}
          increment={this.handlePlusBtn}
          substract={this.handleMinusBtn}
        />
        <Counter
          count={this.state.count}
          increment={this.handlePlusBtn}
          substract={this.handleMinusBtn}
        />
      </div>
    );
  }
}

export default App;
