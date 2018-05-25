import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import Popover from '../';
import Pop from './pop';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleClick(e) {
    this.setState({ open: !this.state.open });
  }

  handleClose(e) {
    this.setState({ open: false });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React Popover</h2>
          <p>
            <a href="https://github.com/dbtek/react-popover">Github</a>
          </p>
        </div>

        <Pop />
        <Pop />
        <Pop />
        <Pop />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
