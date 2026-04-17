/**
 * @file GlobalStyles.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Hooks
import { useScrollBar } from "../hooks";

// Components
import { Global } from '@emotion/react';

// Styles
import useNoticeStyle from "../Notification/style";
import useToastStyle from "../Toast/style";
import useTooltipStyle from "../Tooltip/style";
import useScrollBarStyle from "./style/scrollBar";
import useVirtualScrollBarStyle from "./style/virtualScrollBar";

// Types
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "@emotion/react/jsx-runtime";
var GlobalStyles = function GlobalStyles() {
  var _useScrollBar = useScrollBar(),
    hasPlaceholderScrollBar = _useScrollBar.hasPlaceholderScrollBar;
  var scrollBarStyle = useScrollBarStyle();
  var virtualScrollBarStyle = useVirtualScrollBarStyle();
  var toastStyle = useToastStyle();
  var noticeStyle = useNoticeStyle();
  var tooltipStyle = useTooltipStyle();
  return _jsxs(_Fragment, {
    children: [hasPlaceholderScrollBar() && _jsx(Global, {
      styles: scrollBarStyle
    }), _jsx(Global, {
      styles: virtualScrollBarStyle
    }), _jsx(Global, {
      styles: toastStyle
    }), _jsx(Global, {
      styles: noticeStyle
    }), _jsx(Global, {
      styles: tooltipStyle
    })]
  });
};
export default GlobalStyles;