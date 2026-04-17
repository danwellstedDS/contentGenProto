var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file ScrollBar.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Hooks
import { useCallback } from 'react';
import { useCreateStyles } from "./";

// Vendors
import classNames from 'classnames';
export var Direction = {
  HORIZONTAL: 'horizontal',
  VERTICAL: 'vertical'
};
// cache
var tempSize = {
  vertical: null,
  horizontal: null
};
export var useScrollBarStyle = function useScrollBarStyle() {
  var createStyles = useCreateStyles();
  return createStyles(function (_ref) {
    var css = _ref.css,
      prefixCls = _ref.prefixCls;
    return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            &.", "-scroll-bar-for-measure {\n                position: absolute;\n                top: -9999px;\n                width: 50px;\n                height: 50px;\n\n                &.horizontal {\n                    overflow-x: scroll;\n                }\n\n                &.vertical {\n                    overflow-y: scroll;\n                }\n            }\n        "])), prefixCls);
  });
};
var useScrollBar = function useScrollBar() {
  var _useScrollBarStyle = useScrollBarStyle(),
    styles = _useScrollBarStyle.styles;
  var getSize = useCallback(function () {
    var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Direction.VERTICAL;
    if (document == null || window == null) {
      return 0;
    }
    var isVertical = direction === Direction.VERTICAL;
    if (isVertical && tempSize.vertical !== null) {
      return tempSize.vertical;
    } else if (!isVertical && tempSize.horizontal != null) {
      return tempSize.horizontal;
    }
    var scrollDiv = document.createElement('div');
    scrollDiv.className = classNames(styles, direction);
    document.body.appendChild(scrollDiv);
    var size;
    if (isVertical) {
      size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      tempSize.vertical = size;
    } else {
      size = scrollDiv.offsetHeight - scrollDiv.clientHeight;
      tempSize.horizontal = size;
    }
    document.body.removeChild(scrollDiv);
    return size;
  }, [styles]);
  var hasPlaceholderScrollBar = useCallback(function () {
    return getSize() > 0;
  }, [getSize]);
  return {
    getSize: getSize,
    hasPlaceholderScrollBar: hasPlaceholderScrollBar
  };
};
export default useScrollBar;