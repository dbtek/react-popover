import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import Popover from '../';

class Pop extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
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
      <div
        style={{
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <strong>Popover in other component</strong>
        <p>
          To see popover{' '}
          <a href="#" ref="target" onClick={this.handleClick.bind(this)}>
            click here
          </a>
          .
        </p>
        <Popover
          placement="right"
          container={this}
          target={this.refs.target}
          show={this.state.open}
          onHide={this.handleClose.bind(this)}
        >
          <p>Hey! This is the popover with arrow. Click outside to close it.</p>
        </Popover>
      </div>
    );
  }
}

export default Pop;
