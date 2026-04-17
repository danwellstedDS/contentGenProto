"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Drawer = _interopRequireDefault(require("./Drawer"));
var _DrawerFooter = _interopRequireDefault(require("./DrawerFooter"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @file index.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

var Drawer = _Drawer.default;
Drawer.Footer = _DrawerFooter.default;
var _default = exports.default = Drawer;