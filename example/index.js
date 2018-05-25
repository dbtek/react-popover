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
        <p className="App-intro">
          To see popover{' '}
          <a href="#" ref="target" onClick={this.handleClick.bind(this)}>
            click here
          </a>.
          <Popover
            placement="right"
            container={this}
            target={this.refs.target}
            show={this.state.open}
            onHide={this.handleClose.bind(this)}
          >
            <p>Hey! This is the popover. Click outside to close it.</p>
          </Popover>
        </p>
        <Pop />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
