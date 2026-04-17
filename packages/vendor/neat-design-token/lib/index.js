"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  defaultToken: true,
  PowerBlackToken: true,
  ladderColor: true,
  globalTokenMeta: true
};
Object.defineProperty(exports, "PowerBlackToken", {
  enumerable: true,
  get: function get() {
    return _powerBlack.default;
  }
});
exports.defaultToken = void 0;
Object.defineProperty(exports, "globalTokenMeta", {
  enumerable: true,
  get: function get() {
    return _globalTokenMeta.default;
  }
});
Object.defineProperty(exports, "ladderColor", {
  enumerable: true,
  get: function get() {
    return _ladderColor.default;
  }
});
var _powerBlack = _interopRequireDefault(require("./token/powerBlack"));
var _ladderColor = _interopRequireDefault(require("./color/ladderColor"));
var _globalTokenMeta = _interopRequireDefault(require("./token/globalTokenMeta"));
var _rgba = require("./util/rgba");
Object.keys(_rgba).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _rgba[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _rgba[key];
    }
  });
});
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @file index.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Themes

// Export Ladder Color

// Export Tokens

var defaultToken = exports.defaultToken = _powerBlack.default;

// Export Token Meta

// Export utils

// Export Types