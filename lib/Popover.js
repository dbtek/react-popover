'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Overlay = require('react-overlays/lib/Overlay');

var _Overlay2 = _interopRequireDefault(_Overlay);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PopoverStyle = {
  position: 'absolute',
  padding: '0 5px'
};

var PopoverInnerStyle = {
  width: 200,
  padding: '10px 14px',
  color: '#666',
  backgroundColor: '#fff',
  boxShadow: '0 0 30px rgba(39, 43, 55, 0.15)'
};

var PopoverArrowStyle = {
  position: 'absolute',
  width: 0, height: 0,
  borderRightColor: 'transparent',
  borderLeftColor: 'transparent',
  borderTopColor: 'transparent',
  borderBottomColor: 'transparent',
  borderStyle: 'solid'
};

var PlacementStyles = {
  left: {
    tooltip: { marginLeft: -3, padding: '0 5px' },
    arrow: {
      right: 0, marginTop: -5, borderWidth: '5px 0 5px 5px', borderLeftColor: '#fff'
    }
  },
  right: {
    tooltip: { marginRight: 3, padding: '0 5px' },
    arrow: { left: 0, marginTop: -5, borderWidth: '5px 5px 5px 0', borderRightColor: '#fff' }
  },
  top: {
    tooltip: { marginTop: -3, padding: '5px 0' },
    arrow: { bottom: 0, marginLeft: -5, borderWidth: '5px 5px 0', borderTopColor: '#fff' }
  },
  bottom: {
    tooltip: { marginBottom: 3, padding: '5px 0' },
    arrow: { top: 0, marginLeft: -5, borderWidth: '0 5px 5px', borderBottomColor: '#fff' }
  }
};

var PopoverContent = function PopoverContent(props) {
  var placementStyle = PlacementStyles[props.placement];

  var style = props.style,
      innerStyle = props.innerStyle,
      _props$arrowOffsetLef = props.arrowOffsetLeft,
      left = _props$arrowOffsetLef === undefined ? placementStyle.arrow.left : _props$arrowOffsetLef,
      _props$arrowOffsetTop = props.arrowOffsetTop,
      top = _props$arrowOffsetTop === undefined ? placementStyle.arrow.top : _props$arrowOffsetTop,
      children = props.children;


  return _react2.default.createElement(
    'div',
    { style: _extends({}, PopoverStyle, placementStyle.tooltip, style) },
    _react2.default.createElement('div', { style: _extends({}, PopoverArrowStyle, placementStyle.arrow, { left: left, top: top }) }),
    _react2.default.createElement(
      'div',
      { style: _extends({}, PopoverInnerStyle, innerStyle) },
      children
    )
  );
};

var Popover = function Popover(props) {
  return _react2.default.createElement(
    _Overlay2.default,
    {
      show: props.show,
      onHide: props.onHide,
      placement: props.placement,
      container: props.container,
      target: function target(p) {
        return _reactDom2.default.findDOMNode(props.target);
      },
      rootClose: props.hideWithOutsideClick
    },
    _react2.default.createElement(
      PopoverContent,
      { innerStyle: props.style, style: props.containerStyle },
      props.children
    )
  );
};

Popover.propTypes = {
  show: _propTypes2.default.bool.isRequired,
  onHide: _propTypes2.default.func,
  placement: _propTypes2.default.string,
  target: _propTypes2.default.object,
  style: _propTypes2.default.object,
  containerStyle: _propTypes2.default.object,
  container: _propTypes2.default.object,
  hideWithOutsideClick: _propTypes2.default.bool,
  children: _propTypes2.default.element.isRequired
};

Popover.defaultProps = {
  onHide: function onHide() {},
  placement: 'bottom',
  hideWithOutsideClick: true
};

exports.default = Popover;