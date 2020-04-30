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

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("C0kq");


/***/ }),

/***/ "C0kq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__("FfxO");

// EXTERNAL MODULE: external "isomorphic-unfetch"
var external_isomorphic_unfetch_ = __webpack_require__("0bYB");
var external_isomorphic_unfetch_default = /*#__PURE__*/__webpack_require__.n(external_isomorphic_unfetch_);

// CONCATENATED MODULE: ./utils/index.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const fetchData = async (_ref) => {
  let {
    url,
    method = 'POST',
    responseType = 'json',
    body,
    headers = {}
  } = _ref,
      params = _objectWithoutProperties(_ref, ["url", "method", "responseType", "body", "headers"]);

  let defaultHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  };

  if (Object.keys(headers).length) {
    defaultHeaders = _objectSpread({}, defaultHeaders, {}, headers);
  }

  const options = _objectSpread({
    method,
    headers: _objectSpread({}, defaultHeaders)
  }, params);

  if (body) {
    options.body = JSON.stringify(body);
  }

  try {
    const res = await external_isomorphic_unfetch_default()(url, options);
    return res[responseType]();
  } catch (err) {
    throw err;
  }
};

/* harmony default export */ var utils = (fetchData);
// EXTERNAL MODULE: ../redux/actions/calculatorActions.js
var calculatorActions = __webpack_require__("oRSy");

// CONCATENATED MODULE: ./pages/overview.js
var __jsx = external_react_default.a.createElement;

function overview_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function overview_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { overview_ownKeys(Object(source), true).forEach(function (key) { overview_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { overview_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function overview_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function calculate_age(dob) {
  const diff = Date.now() - dob.getTime();
  const age_diff = new Date(diff);
  return Math.abs(age_diff.getUTCFullYear() - 1970);
}

function saveData(payload) {
  return utils({
    url: `/overview`,
    body: overview_objectSpread({}, payload)
  });
}

;

class overview_Calculator extends external_react_default.a.Component {
  static getInitialProps({
    store
  }) {}

  constructor(props) {
    super(props);

    overview_defineProperty(this, "handleValueChange", (element, field) => {
      this.setState({
        [field]: element.value
      }); // eslint-disable-next-line react/destructuring-assignment
    });

    const {
      sessionId,
      patientSex,
      patientHeightFormatted,
      patientWeightFormatted,
      patientBirthDate,
      uid
    } = props;
    const dateYearMonthDayArray = patientBirthDate.split('-', 3);
    const formattedBirthDate = new Date(dateYearMonthDayArray);
    this.state = {
      currentAge: calculate_age(formattedBirthDate),
      currentWeight: patientWeightFormatted,
      currentHeight: patientHeightFormatted,
      currentSex: patientSex,
      currentCreatine: '',
      sessionId,
      uid,
      inputsFilled: false
    };
  }

  componentDidUpdate() {
    if (this.state.currentSex !== "" && this.state.currentWeight !== "" && this.state.currentHeight !== "" && this.state.currentAge !== "" && this.state.currentCreatine !== "") {
      console.log('inputs filled');
      saveData({
        currentAge: this.state.currentAge,
        currentWeight: this.state.currentWeight,
        currentSex: this.state.currentSex,
        currentCreatine: this.state.currentCreatine,
        currentHeight: this.state.currentHeight,
        uid: this.state.uid
      });
    } else {
      console.log('inputs not filled');
    }
  }

  render() {
    const {
      currentAge,
      currentSex,
      currentHeight,
      currentCreatine,
      currentWeight,
      sessionId,
      inputsFilled
    } = this.state;
    return __jsx(external_semantic_ui_react_["Container"], {
      size: "large",
      textAlign: "center"
    }, __jsx(external_semantic_ui_react_["Header"], {
      as: "h2"
    }, "MD Calc Demo"), __jsx("br", null), __jsx(external_semantic_ui_react_["Segment"], null, __jsx(external_semantic_ui_react_["Grid"], {
      columns: 2
    }, __jsx(external_semantic_ui_react_["Grid"].Row, null, __jsx(external_semantic_ui_react_["Grid"].Column, null, __jsx(external_semantic_ui_react_["Header"], {
      as: "h4"
    }, "Sex")), __jsx(external_semantic_ui_react_["Grid"].Column, null, __jsx(external_semantic_ui_react_["Button"].Group, null, __jsx(external_semantic_ui_react_["Button"], {
      value: "female",
      active: currentSex === 'female',
      onClick: (event, element) => this.handleValueChange(element, 'currentSex')
    }, "Female"), __jsx(external_semantic_ui_react_["Button"], {
      value: "male",
      active: currentSex === 'male',
      onClick: (event, element) => this.handleValueChange(element, 'currentSex')
    }, "Male")))), __jsx(external_semantic_ui_react_["Divider"], {
      section: true
    }), __jsx(external_semantic_ui_react_["Grid"].Row, null, __jsx(external_semantic_ui_react_["Grid"].Column, null, __jsx(external_semantic_ui_react_["Header"], {
      as: "h4"
    }, "Age")), __jsx(external_semantic_ui_react_["Grid"].Column, null, __jsx(external_semantic_ui_react_["Input"], {
      label: {
        basic: true,
        content: 'years'
      },
      labelPosition: "right",
      placeholder: "Enter age...",
      value: currentAge,
      onChange: (event, element) => this.handleValueChange(element, 'currentAge')
    }))), __jsx(external_semantic_ui_react_["Divider"], {
      section: true
    }), __jsx(external_semantic_ui_react_["Grid"].Row, null, __jsx(external_semantic_ui_react_["Grid"].Column, null, __jsx(external_semantic_ui_react_["Header"], {
      as: "h4"
    }, "Weight")), __jsx(external_semantic_ui_react_["Grid"].Column, null, __jsx(external_semantic_ui_react_["Input"], {
      label: {
        basic: true,
        content: 'kg'
      },
      labelPosition: "right",
      placeholder: "Enter weight...",
      value: currentWeight,
      onChange: (event, element) => this.handleValueChange(element, 'currentWeight')
    }))), __jsx(external_semantic_ui_react_["Divider"], {
      section: true
    }), __jsx(external_semantic_ui_react_["Grid"].Row, null, __jsx(external_semantic_ui_react_["Grid"].Column, null, __jsx(external_semantic_ui_react_["Header"], {
      as: "h4"
    }, "Creatinine")), __jsx(external_semantic_ui_react_["Grid"].Column, null, __jsx(external_semantic_ui_react_["Input"], {
      label: {
        basic: true,
        content: 'mg/dl'
      },
      labelPosition: "right",
      placeholder: "Enter creatinine...",
      value: currentCreatine,
      onChange: (event, element) => this.handleValueChange(element, 'currentCreatine')
    }))), __jsx(external_semantic_ui_react_["Divider"], {
      section: true
    }), __jsx(external_semantic_ui_react_["Grid"].Row, null, __jsx(external_semantic_ui_react_["Grid"].Column, null, __jsx(external_semantic_ui_react_["Header"], {
      as: "h4"
    }, "Height")), __jsx(external_semantic_ui_react_["Grid"].Column, null, __jsx(external_semantic_ui_react_["Input"], {
      label: {
        basic: true,
        content: 'cm'
      },
      labelPosition: "right",
      placeholder: "Enter height...",
      value: currentHeight,
      onChange: (event, element) => this.handleValueChange(element, 'currentHeight')
    })))), __jsx(external_semantic_ui_react_["Button"], {
      disabled: !inputsFilled
    }, "Inputs filled")));
  }

}

const formatInitialProps = props => overview_objectSpread({}, props);

const mapStateToProps = state => ({
  stats: state.stats.value
});

const mapDispatchToProps = {
  setAge: calculatorActions["c" /* setAge */],
  setWeight: calculatorActions["d" /* setWeight */]
};

overview_Calculator.getInitialProps = async ({
  req,
  query
}) => {
  const {
    patientBirthDate,
    patientSex,
    patientHeightFormatted,
    patientWeightFormatted,
    uid,
    sessionId
  } = query;
  return formatInitialProps({
    patientBirthDate,
    patientSex,
    patientHeightFormatted,
    patientWeightFormatted,
    uid,
    sessionId
  });
};

/* harmony default export */ var overview = __webpack_exports__["default"] = (Object(external_react_redux_["connect"])(mapStateToProps, mapDispatchToProps)(overview_Calculator));

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