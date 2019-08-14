import React from 'react';
import ReactDOM from 'react-dom';
import Overlay from 'react-overlays/lib/Overlay';
import PropTypes from 'prop-types';

const PopoverStyle = {
  position: 'absolute',
  padding: '0 5px'
};

const PopoverInnerStyle = {
  width: 200,
  padding: '10px 14px',
  color: '#666',
  backgroundColor: '#fff',
  boxShadow: '0 0 30px rgba(39, 43, 55, 0.15)'
};

const PopoverArrowStyle = {
  position: 'absolute',
  width: 0,
  height: 0,
  borderRightColor: 'transparent',
  borderLeftColor: 'transparent',
  borderTopColor: 'transparent',
  borderBottomColor: 'transparent',
  borderStyle: 'solid'
};

const PlacementStyles = {
  left: {
    tooltip: { marginLeft: -3, padding: '0 5px' },
    arrow: {
      right: 0,
      marginTop: -5,
      borderWidth: '5px 0 5px 5px',
      borderLeftColor: '#fff'
    }
  },
  right: {
    tooltip: { marginRight: 3, padding: '0 5px' },
    arrow: {
      left: 0,
      marginTop: -5,
      borderWidth: '5px 5px 5px 0',
      borderRightColor: '#fff'
    }
  },
  top: {
    tooltip: { marginTop: -3, padding: '5px 0' },
    arrow: {
      bottom: 0,
      marginLeft: -5,
      borderWidth: '5px 5px 0',
      borderTopColor: '#fff'
    }
  },
  bottom: {
    tooltip: { marginBottom: 3, padding: '5px 0' },
    arrow: {
      top: 0,
      marginLeft: -5,
      borderWidth: '0 5px 5px',
      borderBottomColor: '#fff'
    }
  }
};

const PopoverContent = props => {
  const placementStyle = PlacementStyles[props.placement];

  const {
    style,
    innerStyle,
    arrowOffsetLeft: left = placementStyle.arrow.left,
    arrowOffsetTop: top = placementStyle.arrow.top,
    children,
    showArrow,
    arrowStyle
  } = props;

  return (
    <div style={{ ...PopoverStyle, ...placementStyle.tooltip, ...style }}>
      {showArrow && (
        <div
          style={{ ...PopoverArrowStyle, ...placementStyle.arrow, ...arrowStyle, left, top }}
        />
      )}
      <div style={{ ...PopoverInnerStyle, ...innerStyle }}>{children}</div>
    </div>
  );
};

const Popover = props => {
  if (
    ReactDOM.findDOMNode(props.container) &&
    ReactDOM.findDOMNode(props.container).parentElement.parentElement !==
      document.body
  ) {
    ReactDOM.findDOMNode(props.container).style.position = 'relative';
  }
  return (
    <Overlay
      show={props.show}
      onHide={props.onHide}
      placement={props.placement}
      container={props.container}
      target={p => ReactDOM.findDOMNode(props.target)}
      rootClose={props.hideWithOutsideClick}
    >
      <PopoverContent
        showArrow={props.showArrow}
        arrowStyle={props.arrowStyle}
        innerStyle={props.style}
        style={props.containerStyle}
      >
        {props.children}
      </PopoverContent>
    </Overlay>
  );
};

Popover.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func,
  placement: PropTypes.string,
  target: PropTypes.object,
  style: PropTypes.object,
  containerStyle: PropTypes.object,
  arrowStyle: PropTypes.object,
  container: PropTypes.object,
  hideWithOutsideClick: PropTypes.bool,
  children: PropTypes.element.isRequired,
  showArrow: PropTypes.bool
};

Popover.defaultProps = {
  onHide: () => {},
  placement: 'bottom',
  hideWithOutsideClick: true,
  showArrow: true
};

export default Popover;
