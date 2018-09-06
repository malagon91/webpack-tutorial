webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _render = __webpack_require__(9);

var _render2 = _interopRequireDefault(_render);

var _makeMessage = __webpack_require__(10);

var _makeMessage2 = _interopRequireDefault(_makeMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var waitTime = new Promise(function (ok, wrong) {
    setTimeout(function () {
        ok('three seconds');
    }, 3000);
});
module.exports = {
    first: 'message from module',
    delayedMessage: async function delayedMessage() {
        var message = await waitTime;
        console.log(message);
        (0, _render2.default)((0, _makeMessage2.default)(message));
    }
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function renderDOM(element) {
    document.body.append(element);
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function makeMessage(msg) {
    var ele = document.createElement('p');
    ele.textContent = msg;
    return ele;
}

exports.default = makeMessage;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOYAAABICAMAAADVonkXAAAAhFBMVEUAAAD///////////+XyT7///////////+XyT7///////////+XyT6XyT7///+XyT6XyT7///+XyT7///////////+XyT6XyT6XyT7///////////////////+XyT7///+XyT6XyT7///+XyT7///+XyT7///////+XyT6XyT7///+XyT5mBr0cAAAAKnRSTlMAkBBgCeBQIPVugLBNQi/ovvGyCubHaFsfo3jTP0g3NtZ7mC0ojhi5yaSQvFnOAAAEqklEQVR42uXc7XaiMBAG4AFERLdYCqh8uKil2sL9398eJOxgBhrmpOs5C++vXUXgISEkEAqKLHZv26panT5eYLpZnFdVm9NkoYdT1c0HTDLv2+oxbwuYXmrl9J21cvrO36uqmr6zVk7fiUqS1+k4a+X0nbVy+k6iPE3RSZS7xev0nC9ECcBwBhuS2HDz3oUs+Ncxk80mMUcqOU6z7I0f53QhA/5xrna9GdtRK/cAvc7PhYJJsnGezozFlscohfONOJnM0l8+mxmWTUYr1U7KpHGfzCxF1EqGkzBpls9lRuU9qVLJdCJzjTFuWG+vGkzTuCeD0Tn+PbiYXwolOml7S5nQTeD6bTukwXTams9wRmVpPyorqlQ6z0qmiGOLz72nMDGBCd8qfwGonavDSCY4ojwvT2YCQzns/BjLBLf5PHwik6/EfFXdbBVMehHzns7kK6nzfTTz0nxhKZlXx3ECDaa+kjr3o5kW2gaZXnKzxaUnurgOiATNhan55rZuc6y/y4z+mABQNMt5XCV17hRMchG7DDOttHxMahS4UhoDz3kSv2YusQLBC1Fybsbvucx4iJnVSJLI4zKR1mUettI1gqHEY6Jfad1yeH/5zBtIzC9J+cJSVgduE5T0M9flTzJ9R2Ie9JQnGM0Ubcuxl2nhsDRZZtnSjcMu064TCoLdZn3/pd2N37bGEvPMUdIqvlMwKcSkTOwjlfcGUtpHxgXFbI5lRFbxqqXcLsYyryGeNJQZi4LKyJoYTFxPQZgrvpI2QGqmGeGIE5kIwAqtwxSsNRCmlvIMI5lHu8QRLmWu8Vqjw7z6uA0Fk6P8gGHmEmMZdtkmo0wc5ReaTDF8zwFYlZavRCYJwigTS1qH6eJaVU0QS8lmxtDL9LAbqMEsmq/tgDAZF5R3qmQwkUWY2A1M9JhR97QARvdAoWQywyUQprQ3Osw1qRLszh5VnoHJtN0AeEyHxczFZkzAMLruPCUyQxsTbZIc6rAqbc5ipqTKMgZiXCUyHSAZZBZ9l02wOMwE1zjAVA+rdwqlLhPwblgnMYMpDlQaDDD5TqrUZ0Y9fb3Al5lXWrelFXgwwOQ6UanPxFbRaP4fSdVQYgb4KykuOQCEyXWeQZ8JOFoR/QOyn55PmOIWaDrUl41AwWQ4d6DLxCG2H2Clk8YWeYgPC2mfVcoG7xgomGrnHpX6zJtUescWlboOgJmJ5keqo8m3DY3hPYQwRz4q2qNSk4knXlzfEBEFQnIRxVmY0rA0PQJAkCdRcd9iWPbFJMyRD/72qNRlFiXGFpMh5IRX0heO8Uf35Zf4oYLJeYz7tfgRplR6fgMnZZJBKjMdnz7kP5ZqJvOh/Ovip5hORyU+iR7LMgewZCZkZMgT2FymeooFOnWZUODuBdDEFXS8w2fITMjTLmWDh0LB5E2YUTsDfFKjWNC6+fdii7DhPBpR6Pvpxr22he5e4nidQydWW+r2pm6Vc2Mg9Vq95p85f/rTJzr1YzrXANgJvGyZeawf8iezff7/0xK/m5o4NWf/RNMZOE9VNcXXi+YxCXwuU/rn8oLGXF63mcvLU3N5FW4uLzbO5TXVubx0PJdXyKfzBwH+AM+bvZhsmCGxAAAAAElFTkSuQmCC"

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { "teachers": [{ "name": "first teacher", "twitter": "oneTeacher" }, { "name": "second teacher", "twitter": "twoTeacher" }, { "name": "three teacher", "twitter": "threeTeacher" }, { "name": "four teacher", "twitter": "fourTeacher" }] };

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function renderToDOM(element) {
    document.body.append(element);
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 15 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 16 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(7);

var _message = __webpack_require__(8);

var _platzi = __webpack_require__(11);

var _platzi2 = _interopRequireDefault(_platzi);

var _teachers = __webpack_require__(12);

var _teachers2 = _interopRequireDefault(_teachers);

var _renderToDom = __webpack_require__(13);

var _renderToDom2 = _interopRequireDefault(_renderToDom);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(6);

__webpack_require__(14);

__webpack_require__(15);

__webpack_require__(16);

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
],[35]);