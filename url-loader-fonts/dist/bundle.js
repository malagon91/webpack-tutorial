/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

var _message = __webpack_require__(3);

var _platzi = __webpack_require__(2);

var _platzi2 = _interopRequireDefault(_platzi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.write(_message.first);
(0, _message.delayedMessage)();
var img = document.createElement('img');
img.setAttribute('src', _platzi2.default);
document.body.append(img);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOYAAABICAMAAADVonkXAAAAhFBMVEUAAAD///////////+XyT7///////////+XyT7///////////+XyT6XyT7///+XyT6XyT7///+XyT7///////////+XyT6XyT6XyT7///////////////////+XyT7///+XyT6XyT7///+XyT7///+XyT7///////+XyT6XyT7///+XyT5mBr0cAAAAKnRSTlMAkBBgCeBQIPVugLBNQi/ovvGyCubHaFsfo3jTP0g3NtZ7mC0ojhi5yaSQvFnOAAAEqklEQVR42uXc7XaiMBAG4AFERLdYCqh8uKil2sL9398eJOxgBhrmpOs5C++vXUXgISEkEAqKLHZv26panT5eYLpZnFdVm9NkoYdT1c0HTDLv2+oxbwuYXmrl9J21cvrO36uqmr6zVk7fiUqS1+k4a+X0nbVy+k6iPE3RSZS7xev0nC9ECcBwBhuS2HDz3oUs+Ncxk80mMUcqOU6z7I0f53QhA/5xrna9GdtRK/cAvc7PhYJJsnGezozFlscohfONOJnM0l8+mxmWTUYr1U7KpHGfzCxF1EqGkzBpls9lRuU9qVLJdCJzjTFuWG+vGkzTuCeD0Tn+PbiYXwolOml7S5nQTeD6bTukwXTams9wRmVpPyorqlQ6z0qmiGOLz72nMDGBCd8qfwGonavDSCY4ojwvT2YCQzns/BjLBLf5PHwik6/EfFXdbBVMehHzns7kK6nzfTTz0nxhKZlXx3ECDaa+kjr3o5kW2gaZXnKzxaUnurgOiATNhan55rZuc6y/y4z+mABQNMt5XCV17hRMchG7DDOttHxMahS4UhoDz3kSv2YusQLBC1Fybsbvucx4iJnVSJLI4zKR1mUettI1gqHEY6Jfad1yeH/5zBtIzC9J+cJSVgduE5T0M9flTzJ9R2Ie9JQnGM0Ubcuxl2nhsDRZZtnSjcMu064TCoLdZn3/pd2N37bGEvPMUdIqvlMwKcSkTOwjlfcGUtpHxgXFbI5lRFbxqqXcLsYyryGeNJQZi4LKyJoYTFxPQZgrvpI2QGqmGeGIE5kIwAqtwxSsNRCmlvIMI5lHu8QRLmWu8Vqjw7z6uA0Fk6P8gGHmEmMZdtkmo0wc5ReaTDF8zwFYlZavRCYJwigTS1qH6eJaVU0QS8lmxtDL9LAbqMEsmq/tgDAZF5R3qmQwkUWY2A1M9JhR97QARvdAoWQywyUQprQ3Osw1qRLszh5VnoHJtN0AeEyHxczFZkzAMLruPCUyQxsTbZIc6rAqbc5ipqTKMgZiXCUyHSAZZBZ9l02wOMwE1zjAVA+rdwqlLhPwblgnMYMpDlQaDDD5TqrUZ0Y9fb3Al5lXWrelFXgwwOQ6UanPxFbRaP4fSdVQYgb4KykuOQCEyXWeQZ8JOFoR/QOyn55PmOIWaDrUl41AwWQ4d6DLxCG2H2Clk8YWeYgPC2mfVcoG7xgomGrnHpX6zJtUescWlboOgJmJ5keqo8m3DY3hPYQwRz4q2qNSk4knXlzfEBEFQnIRxVmY0rA0PQJAkCdRcd9iWPbFJMyRD/72qNRlFiXGFpMh5IRX0heO8Uf35Zf4oYLJeYz7tfgRplR6fgMnZZJBKjMdnz7kP5ZqJvOh/Ovip5hORyU+iR7LMgewZCZkZMgT2FymeooFOnWZUODuBdDEFXS8w2fITMjTLmWDh0LB5E2YUTsDfFKjWNC6+fdii7DhPBpR6Pvpxr22he5e4nidQydWW+r2pm6Vc2Mg9Vq95p85f/rTJzr1YzrXANgJvGyZeawf8iezff7/0xK/m5o4NWf/RNMZOE9VNcXXi+YxCXwuU/rn8oLGXF63mcvLU3N5FW4uLzbO5TXVubx0PJdXyKfzBwH+AM+bvZhsmCGxAAAAAElFTkSuQmCC"

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _render = __webpack_require__(4);

var _render2 = _interopRequireDefault(_render);

var _makeMessage = __webpack_require__(5);

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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function renderDOM(element) {
    document.body.append(element);
};

/***/ }),
/* 5 */
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

/***/ })
/******/ ]);