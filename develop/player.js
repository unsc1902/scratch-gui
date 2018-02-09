webpackJsonp([1],{

/***/ 480:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(13);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = __webpack_require__(6);

var _appStateHoc = __webpack_require__(22);

var _appStateHoc2 = _interopRequireDefault(_appStateHoc);

var _controls = __webpack_require__(28);

var _controls2 = _interopRequireDefault(_controls);

var _stage = __webpack_require__(47);

var _stage2 = _interopRequireDefault(_stage);

var _box = __webpack_require__(7);

var _box2 = _interopRequireDefault(_box);

var _gui = __webpack_require__(24);

var _gui2 = _interopRequireDefault(_gui);

var _projectLoaderHoc = __webpack_require__(29);

var _projectLoaderHoc2 = _interopRequireDefault(_projectLoaderHoc);

__webpack_require__(481);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(state) {
    return { vm: state.vm };
};

var VMStage = (0, _reactRedux.connect)(mapStateToProps)(_stage2.default);
var VMControls = (0, _reactRedux.connect)(mapStateToProps)(_controls2.default);

var Player = function (_React$Component) {
    _inherits(Player, _React$Component);

    function Player(props) {
        _classCallCheck(this, Player);

        var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, props));

        _this.handleResize = _this.handleResize.bind(_this);
        _this.state = _this.getWindowSize();
        return _this;
    }

    _createClass(Player, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            window.addEventListener('resize', this.handleResize);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            window.removeEventListener('resize', this.handleResize);
        }
    }, {
        key: 'getWindowSize',
        value: function getWindowSize() {
            return {
                width: window.innerWidth,
                height: window.innerHeight
            };
        }
    }, {
        key: 'handleResize',
        value: function handleResize() {
            this.setState(this.getWindowSize());
        }
    }, {
        key: 'render',
        value: function render() {
            var height = this.state.height - 40;
            var width = height + height / 3;
            if (width > this.state.width) {
                width = this.state.width;
                height = width * .75;
            }
            return _react2.default.createElement(
                _gui2.default,
                _extends({}, this.props, {
                    style: {
                        margin: '0 auto'
                    },
                    width: width
                }),
                _react2.default.createElement(
                    _box2.default,
                    { height: 40 },
                    _react2.default.createElement(VMControls, {
                        style: {
                            marginRight: 10,
                            height: 40
                        }
                    })
                ),
                _react2.default.createElement(VMStage, {
                    height: height,
                    width: width
                })
            );
        }
    }]);

    return Player;
}(_react2.default.Component);

var App = (0, _appStateHoc2.default)((0, _projectLoaderHoc2.default)(Player));

var appTarget = document.createElement('div');
document.body.appendChild(appTarget);

_reactDom2.default.render(_react2.default.createElement(App, null), appTarget);

/***/ }),

/***/ 481:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(482);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(3)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/css-loader/index.js??ref--1-1!../../node_modules/postcss-loader/lib/index.js??postcss!./player.css", function() {
		var newContent = require("!!../../node_modules/css-loader/index.js??ref--1-1!../../node_modules/postcss-loader/lib/index.js??postcss!./player.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 482:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "body {\n    padding: 0;\n    margin: 0;\n}\n", ""]);

// exports


/***/ })

},[480]);
//# sourceMappingURL=player.js.map