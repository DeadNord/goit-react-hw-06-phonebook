import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import './index.css';

import { Provider } from 'react-redux';
import store from './redux/store';

// import * as actions from './redux/actions';
// import { connect } from 'react-redux';
// const mapStateToProps = state => ({ value: state.contacts });
// const mapDispatchToProps = dispatch => ({
//   action1: () => dispatch(actions.func()),
// });
// export default connect(mapStateToProps, mapDispatchToProps)("component");

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.querySelector('#root'),
);
