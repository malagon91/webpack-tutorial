webpackJsonp([1],{

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(6);

var _message = __webpack_require__(7);

var _platzi = __webpack_require__(8);

var _platzi2 = _interopRequireDefault(_platzi);

var _teachers = __webpack_require__(9);

var _teachers2 = _interopRequireDefault(_teachers);

var _renderToDom = __webpack_require__(10);

var _renderToDom2 = _interopRequireDefault(_renderToDom);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(13);

__webpack_require__(18);

__webpack_require__(19);

__webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Teacher = function Teacher(props) {
  return _react2.default.createElement(
    'li',
    { className: 'teacher' },
    props.name,
    ' ',
    _react2.default.createElement(
      'a',
      { href: 'https://www.google.com.mx' },
      props.twitter
    )
  );
};

var Teachers = function (_Component) {
  _inherits(Teachers, _Component);

  function Teachers() {
    _classCallCheck(this, Teachers);

    return _possibleConstructorReturn(this, (Teachers.__proto__ || Object.getPrototypeOf(Teachers)).apply(this, arguments));
  }

  _createClass(Teachers, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'ul',
          { className: 'teachers' },
          this.props.data.teachers.map(function (teac) {
            return _react2.default.createElement(Teacher, teac);
          })
        )
      );
    }
  }]);

  return Teachers;
}(_react.Component);

(0, _reactDom.render)(_react2.default.createElement(Teachers, { data: _teachers2.default }), document.getElementById('container'));
// data.teachers.forEach(element => {
//     const el = document.createElement('li');
//     el.textContent = element.name;
//     renderToDom(el);
// });
var img = document.createElement('img');
img.setAttribute('src', _platzi2.default);
document.body.append(img);

/***/ })

},[35]);