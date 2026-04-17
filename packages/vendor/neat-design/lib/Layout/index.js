"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Layout = _interopRequireDefault(require("./Layout"));
var _LayoutContent = _interopRequireDefault(require("./LayoutContent"));
var _LayoutFooter = _interopRequireDefault(require("./LayoutFooter"));
var _LayoutHeader = _interopRequireDefault(require("./LayoutHeader"));
var _LayoutSider = _interopRequireDefault(require("./LayoutSider"));
var _LayoutTitleBar = _interopRequireDefault(require("./LayoutTitleBar"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @file index.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Components

var Layout = _Layout.default;
Layout.Header = _LayoutHeader.default;
Layout.Content = _LayoutContent.default;
Layout.Footer = _LayoutFooter.default;
Layout.Sider = _LayoutSider.default;
Layout.TitleBar = _LayoutTitleBar.default;
var _default = exports.default = Layout;