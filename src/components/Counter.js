import React from 'react';

class Counter extends React.Component {
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
              <button
                type='button'
                className='px-5 mx-4 btn btn-danger'
                onClick={this.handleMinusBtn}
              >
                -
              </button>
              <button
                type='button'
                className='px-5 mx-4 btn btn-success'
                onClick={this.handlePlusBtn}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;
