"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultTheme = exports.PowerBlackTheme = void 0;
Object.defineProperty(exports, "genComponentsToken", {
  enumerable: true,
  get: function get() {
    return _genComponentsToken.genComponentsToken;
  }
});
Object.defineProperty(exports, "genSubComponentsToken", {
  enumerable: true,
  get: function get() {
    return _genSubComponentsToken.genSubComponentsToken;
  }
});
Object.defineProperty(exports, "neatTheme2AntTheme", {
  enumerable: true,
  get: function get() {
    return _neatTheme2AntTheme.default;
  }
});
var _neatDesignToken = require("@derbysoft/neat-design-token");
var _powerBlackComponentsToken = require("./components/powerBlackComponentsToken");
var _powerBlackSubComponentsToken = require("./subComponents/powerBlackSubComponentsToken");
var _genComponentsToken = require("./components/genComponentsToken");
var _genSubComponentsToken = require("./subComponents/genSubComponentsToken");
var _neatTheme2AntTheme = _interopRequireDefault(require("./util/neatTheme2AntTheme"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @file index.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Statics

// Vendors

// Types

// Export Themes
var PowerBlackTheme = exports.PowerBlackTheme = {
  token: _neatDesignToken.PowerBlackToken,
  components: (0, _powerBlackComponentsToken.genPowerBlackComponentsToken)(_neatDesignToken.PowerBlackToken),
  subComponents: (0, _powerBlackSubComponentsToken.genPowerBlackSubComponentsToken)(_neatDesignToken.PowerBlackToken)
};
var defaultTheme = exports.defaultTheme = PowerBlackTheme;

// Export Vendors

// Export Types