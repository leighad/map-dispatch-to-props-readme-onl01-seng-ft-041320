import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addItem } from  './actions/items';

class App extends Component {

  handleOnClick = event => {
    // this.props.store.dispatch(addItem());
    this.props.addItem()
  }

  render() {
    debugger 
    return (
      <div className="App">
        {/* <button onClick={(event) => this.handleOnClick(event)}> */}
        <button onClick={this.handleOnClick}>
          Click
          </button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    items: state.items
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     addItem: () => {
//       dispatch(addItem())
//     }
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default connect(mapStateToProps, { addItem })(App);

// NOTE 
// export default connect(state => ({ items: state.items }), { addItem })(App);

// is just like writing:

// const mapStateToProps = state => {
//   return {
//     items: state.items
//   }
// }
 
// const mapDispatchToProps = dispatch => {
//   return {
//     addItem: () => { dispatch(addItem()) }
//   }
// }
 
// export default connect(mapStateToProps, mapDispatchToProps)(App);


