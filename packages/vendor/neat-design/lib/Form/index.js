"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _antd = require("antd");
var _Form = _interopRequireDefault(require("./Form"));
var _FormItem = _interopRequireDefault(require("./FormItem"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @file index.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

var Form = _Form.default;
Form.useForm = _antd.Form.useForm;
Form.useFormInstance = _antd.Form.useFormInstance;
Form.useWatch = _antd.Form.useWatch;
Form.Item = _FormItem.default;
Form.List = _antd.Form.List;
Form.ErrorList = _antd.Form.ErrorList;
Form.Provider = _antd.Form.Provider;
var _default = exports.default = Form;