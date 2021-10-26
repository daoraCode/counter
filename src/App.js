import React from 'react';
import Counter from './components/Counter'

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
    this.setState({ count: this.state.count - 1});
  };

   // custom function = handleBtnMinus method allows us to decrement
  handlePlusBtn = () => {
    this.setState({ count: this.state.count + 1});
  };

  render() {
    return (
      <div>
        <Counter />
      </div>
    );
  }
}

export default App;
