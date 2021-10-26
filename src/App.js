import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    // variable state
    this.state = {
      count: 0,
    };
  }
  // custom function = handleBtnMinus method allows us to decrement
  handleMinusBtn = (event) => {
    console.log(event.target.value);
  }

  handlePlusBtn = (event) => {
    console.log(event.target.value);
  }

  render() {
    return (
      <div className='container-fluid mx-2'>
        <div className='row'>
          <div className='col-12'>
            <div>
            <h1>Counter</h1>
            {/* variable of type object used in h2 html tag */}
            <h2>{this.state.count}</h2>
            {/* button created for increment or decrement value */}
            <button type="button" className="px-5 mx-4 btn btn-danger" onClick={this.handleMinusBtn}>-</button>
            <button type="button" className="px-5 mx-4 btn btn-success" onClick={this.handlePlusBtn}>+</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
