function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * @file useTabBarExtraContent.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Hooks
import { useCallback } from 'react';
import { usePrefixCls } from "../../hooks";

// Vendors
import { cloneElement } from 'react';
import { isTabBarExtraMap } from "../typeUtil";

// Types
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "@emotion/react/jsx-runtime";
var useTabBarExtraContent = function useTabBarExtraContent() {
  var prefixCls = usePrefixCls();
  var renderContent = useCallback(function (content) {
    return content.reduce(function (result, item, index) {
      if (!item) {
        return result;
      }
      return [].concat(_toConsumableArray(result), [/*#__PURE__*/cloneElement(item, {
        key: index
      })]);
    }, []);
  }, []);
  var mergeTabBarExtraContent = useCallback(function (defaultTabBarExtraContent) {
    var leftExtraContents = [];
    var rightExtraContents = [];
    for (var _len = arguments.length, tabBarExtraContents = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      tabBarExtraContents[_key - 1] = arguments[_key];
    }
    tabBarExtraContents.forEach(function (tabBarExtraContent) {
      if (isTabBarExtraMap(tabBarExtraContent)) {
        leftExtraContents.push(tabBarExtraContent.left || null);
        rightExtraContents.push(tabBarExtraContent.right || null);
      } else {
        rightExtraContents.push(tabBarExtraContent || null);
      }
    });
    var left = renderContent(leftExtraContents);
    var right = renderContent(rightExtraContents);
    return {
      left: _jsxs(_Fragment, {
        children: [left.length > 0 && _jsx("div", {
          className: "".concat(prefixCls, "-tabs-extra-content-inner"),
          children: left
        }), defaultTabBarExtraContent.left]
      }),
      right: _jsxs(_Fragment, {
        children: [defaultTabBarExtraContent.right, right.length > 0 && _jsx("div", {
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
export default useTabBarExtraContent;