import React from 'react';

class Counter extends React.Component {

  render() {
      
    console.log(this.props);

    
    return (
      <div className='container-fluid mx-2'>
        <div className='row'>
          <div className='col-6'>
            <div>
              <h1>Counter</h1>
              <h2>{this.props.count}</h2>
              <button
                type='button'
                className='px-5 mx-4 btn btn-danger'
                onClick={this.props.substract}
              >
                -
              </button>
              <button
                type='button'
                className='px-5 mx-4 btn btn-success'
                onClick={this.props.increment}
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
