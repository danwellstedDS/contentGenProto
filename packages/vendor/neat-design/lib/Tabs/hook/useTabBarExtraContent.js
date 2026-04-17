"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _hooks = require("../../hooks");
var _typeUtil = require("../typeUtil");
var _jsxRuntime = require("@emotion/react/jsx-runtime");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; } /**
 * @file useTabBarExtraContent.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */ // Hooks
// Vendors
// Types
var useTabBarExtraContent = function useTabBarExtraContent() {
  var prefixCls = (0, _hooks.usePrefixCls)();
  var renderContent = (0, _react.useCallback)(function (content) {
    return content.reduce(function (result, item, index) {
      if (!item) {
        return result;
      }
      return [].concat(_toConsumableArray(result), [/*#__PURE__*/(0, _react.cloneElement)(item, {
        key: index
      })]);
    }, []);
  }, []);
  var mergeTabBarExtraContent = (0, _react.useCallback)(function (defaultTabBarExtraContent) {
    var leftExtraContents = [];
    var rightExtraContents = [];
    for (var _len = arguments.length, tabBarExtraContents = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      tabBarExtraContents[_key - 1] = arguments[_key];
    }
    tabBarExtraContents.forEach(function (tabBarExtraContent) {
      if ((0, _typeUtil.isTabBarExtraMap)(tabBarExtraContent)) {
        leftExtraContents.push(tabBarExtraContent.left || null);
        rightExtraContents.push(tabBarExtraContent.right || null);
      } else {
        rightExtraContents.push(tabBarExtraContent || null);
      }
    });
    var left = renderContent(leftExtraContents);
    var right = renderContent(rightExtraContents);
    return {
      left: (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [left.length > 0 && (0, _jsxRuntime.jsx)("div", {
          className: "".concat(prefixCls, "-tabs-extra-content-inner"),
          children: left
        }), defaultTabBarExtraContent.left]
      }),
      right: (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [defaultTabBarExtraContent.right, right.length > 0 && (0, _jsxRuntime.jsx)("div", {
          className: "".concat(prefixCls, "-tabs-extra-content-inner"),
          children: right
        })]
      })
    };
  }, [prefixCls, renderContent]);
  return {
    mergeTabBarExtraContent: mergeTabBarExtraContent
  };
};
var _default = exports.default = useTabBarExtraContent;