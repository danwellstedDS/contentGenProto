"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _hooks = require("../../hooks");
var _react = require("@emotion/react");
/**
 * @file scrollBar.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Hooks

// Vendors

var useScrollBarStyle = function useScrollBarStyle() {
  var token = (0, _hooks.useToken)();
  var _useSubComponetsToken = (0, _hooks.useSubComponetsToken)(),
    scrollToken = _useSubComponetsToken.Scroll;
  var size = scrollToken['scroll-size'] + scrollToken['scroll-padding'] * 2;
  return /*#__PURE__*/(0, _react.css)("::-webkit-scrollbar{width:", size, "px;height:", size, "px;background-color:transparent;}::-webkit-scrollbar-thumb{background-color:", token['color-scrol'], ";background-clip:padding-box;border:", scrollToken['scroll-padding'], "px solid transparent;border-radius:", scrollToken['scroll-border-radius'], ";}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcm9sbEJhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQmMiLCJmaWxlIjoic2Nyb2xsQmFyLnRzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAZmlsZSBzY3JvbGxCYXIudHNcbiAqIEBhdXRob3IgbGlhbmd4aWFvanVuKGxpYW5neGlhb2p1bkBkZXJieXNvZnQubmV0KVxuICovXG5cbi8vIEhvb2tzXG5pbXBvcnQgeyB1c2VTdWJDb21wb25ldHNUb2tlbiwgdXNlVG9rZW4gfSBmcm9tICcuLi8uLi9ob29rcyc7XG5cbi8vIFZlbmRvcnNcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuY29uc3QgdXNlU2Nyb2xsQmFyU3R5bGUgPSAoKSA9PiB7XG4gICAgY29uc3QgdG9rZW4gPSB1c2VUb2tlbigpO1xuICAgIGNvbnN0IHsgU2Nyb2xsOiBzY3JvbGxUb2tlbiB9ID0gdXNlU3ViQ29tcG9uZXRzVG9rZW4oKTtcbiAgICBjb25zdCBzaXplID0gc2Nyb2xsVG9rZW5bJ3Njcm9sbC1zaXplJ10gKyBzY3JvbGxUb2tlblsnc2Nyb2xsLXBhZGRpbmcnXSAqIDI7XG5cbiAgICByZXR1cm4gY3NzYFxuICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgICAgIHdpZHRoOiAke3NpemV9cHg7XG4gICAgICAgICAgICBoZWlnaHQ6ICR7c2l6ZX1weDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Rva2VuWydjb2xvci1zY3JvbCddfTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gICAgICAgICAgICBib3JkZXI6ICR7c2Nyb2xsVG9rZW5bJ3Njcm9sbC1wYWRkaW5nJ119cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAke3Njcm9sbFRva2VuWydzY3JvbGwtYm9yZGVyLXJhZGl1cyddfTtcbiAgICAgICAgfVxuICAgIGA7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VTY3JvbGxCYXJTdHlsZTtcbiJdfQ== */"));
};
var _default = exports.default = useScrollBarStyle;