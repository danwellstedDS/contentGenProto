"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.genSubComponentsToken = genSubComponentsToken;
var _token = require("../../Action/token");
var _token2 = require("../../ArrowIcon/token");
var _token3 = require("../../CloseButton/token");
var _genScrollToken = _interopRequireDefault(require("../../ConfigProvider/token/genScrollToken"));
var _token4 = require("../../Label/token");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @file genSubComponentsToken.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Vendors

// Types

function genSubComponentsToken(token) {
  return {
    Action: (0, _token.genToken)(token),
    ArrowIcon: (0, _token2.genToken)(token),
    CloseButton: (0, _token3.genToken)(token),
    Label: (0, _token4.genToken)(token),
    Scroll: (0, _genScrollToken.default)(token)
  };
}