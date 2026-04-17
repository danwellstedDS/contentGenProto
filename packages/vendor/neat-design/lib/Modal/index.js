"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _useModal = _interopRequireDefault(require("./hooks/useModal"));
var _antd = require("antd");
var _Modal = _interopRequireDefault(require("./Modal"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @file index.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 * @author minglong.zhao(minglong.zhao@derbysoft.net)
 */

// Hooks

// Components

var Modal = _Modal.default;
Modal.useModal = _useModal.default;
Modal.config = _antd.Modal.config;
Modal.destroyAll = _antd.Modal.destroyAll;
var _default = exports.default = Modal;