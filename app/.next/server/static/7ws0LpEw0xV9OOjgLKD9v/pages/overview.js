module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("C0kq");


/***/ }),

/***/ "C0kq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_actions_calculatorActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("oRSy");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("FfxO");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function calculate_age(dob) {
  const diff = Date.now() - dob.getTime();
  const age_diff = new Date(diff);
  return Math.abs(age_diff.getUTCFullYear() - 1970);
}

class Calculator extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  static getInitialProps({
    store
  }) {}

  constructor(props) {
    super(props);

    _defineProperty(this, "handleValueChange", (element, field) => {
      this.setState({
        [field]: element.value
      });
    });

    const {
      sessionId,
      patientSex,
      patientHeightFormatted,
      patientWeightFormatted,
      patientBirthDate
    } = props;
    const dateYearMonthDayArray = patientBirthDate.split('-', 3);
    const formattedBirthDate = new Date(dateYearMonthDayArray);
    this.state = {
      currentAge: calculate_age(formattedBirthDate),
      currentWeight: patientWeightFormatted,
      currentHeight: patientHeightFormatted,
      currentSex: patientSex,
      currentCreatine: '',
      sessionId
    };
  }

  render() {
    const {
      currentAge,
      currentSex,
      currentHeight,
      currentCreatine,
      currentWeight,
      sessionId
    } = this.state;
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Container"], {
      size: "large",
      textAlign: "center"
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], {
      as: "h2"
    }, "MD Calc Demo"), __jsx("br", null), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
      columns: 2
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], {
      as: "h4"
    }, "Sex")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"].Group, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      active: currentSex === 'female'
    }, "Female"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      active: currentSex === 'male'
    }, "Male")))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
      section: true
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], {
      as: "h4"
    }, "Age")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Input"], {
      label: {
        basic: true,
        content: 'years'
      },
      labelPosition: "right",
      placeholder: "Enter age...",
      value: currentAge,
      onChange: (event, element) => this.handleValueChange(element, 'currentAge')
    }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
      section: true
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], {
      as: "h4"
    }, "Weight")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Input"], {
      label: {
        basic: true,
        content: 'kg'
      },
      labelPosition: "right",
      placeholder: "Enter weight...",
      value: currentWeight,
      onChange: (event, element) => this.handleValueChange(element, 'currentWeight')
    }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
      section: true
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], {
      as: "h4"
    }, "Creatinine")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Input"], {
      label: {
        basic: true,
        content: 'mg/dl'
      },
      labelPosition: "right",
      placeholder: "Enter creatinine...",
      value: currentCreatine,
      onChange: (event, element) => this.handleValueChange(element, 'currentCreatine')
    }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
      section: true
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], {
      as: "h4"
    }, "Height")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Input"], {
      label: {
        basic: true,
        content: 'cm'
      },
      labelPosition: "right",
      placeholder: "Enter height...",
      value: currentHeight,
      onChange: (event, element) => this.handleValueChange(element, 'currentHeight')
    }))))));
  }

}

const formatInitialProps = props => _objectSpread({}, props);

const mapStateToProps = state => ({
  stats: state.stats.value
});

const mapDispatchToProps = {
  setAge: _redux_actions_calculatorActions__WEBPACK_IMPORTED_MODULE_2__[/* setAge */ "c"],
  setWeight: _redux_actions_calculatorActions__WEBPACK_IMPORTED_MODULE_2__[/* setWeight */ "d"]
};

Calculator.getInitialProps = async ({
  req,
  query
}) => {
  const {
    patientBirthDate,
    patientSex,
    patientHeightFormatted,
    patientWeightFormatted,
    sessionId
  } = query;
  return formatInitialProps({
    patientBirthDate,
    patientSex,
    patientHeightFormatted,
    patientWeightFormatted,
    sessionId
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Calculator));

/***/ }),

/***/ "FfxO":
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "oRSy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SET_AGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SET_WEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return setAge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return setWeight; });
const SET_AGE = "SET_AGE";
const SET_WEIGHT = "SET_WEIGHT";


//Action Creator
const setAge = () => ({
   type: SET_AGE
});

const setWeight = () => ({
    type: SET_WEIGHT
});


/***/ })

/******/ });