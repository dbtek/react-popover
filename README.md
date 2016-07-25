# React Popover
Totally controlled popover component based on [React Overlays](https://github.com/react-bootstrap/react-overlays).

## Install
```bash
 $ npm install react-popover
```

## Usage
```js
import 'Popover' from 'react-popover';
import React, { Component } from 'react';

class PopoverDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleClick(e) {
    this.setState({open: !this.state.open});
  }

  handleClose(e) {
    this.setState({open: false});
  }

  render() {
    return (
      <div>
        <a
          href="#"
          className="button"
          ref="target"
          onClick={this.handleClick.bind(this)}>Popover</a>
        <Popover
          placement='left'
          container={this}
          target={this.refs.target}
          show={this.state.open}
          onHide={this.handleClose.bind(this)} >
          <p>This is popover</p>
        </Popover>
      </div>
    );
  }
}
```

## Author
Ismail Demirbilek - [@dbtek](https://twitter.com/dbtek)
MIT Licensed