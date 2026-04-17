"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _useToken = _interopRequireDefault(require("../../hooks/useToken"));
var _react = require("@emotion/react");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @file virtualScrollBar.ts
 * @author rzh(peter.rao@derbysoft.net)
 */

// Hooks

// Vendors

var useScrollBarStyle = function useScrollBarStyle() {
  var token = (0, _useToken.default)();
  return /*#__PURE__*/(0, _react.css)(".rc-virtual-list-scrollbar{width:", token['size-static-6'], "px!important;}.rc-virtual-list-scrollbar-thumb{width:", token['size-static-6'], "px!important;background-color:", token['color-bg-overlay'], "!important;border-radius:", token['size-static-6'], "px!important;}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpcnR1YWxTY3JvbGxCYXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY2MiLCJmaWxlIjoidmlydHVhbFNjcm9sbEJhci50cyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGUgdmlydHVhbFNjcm9sbEJhci50c1xuICogQGF1dGhvciByemgocGV0ZXIucmFvQGRlcmJ5c29mdC5uZXQpXG4gKi9cblxuLy8gSG9va3NcbmltcG9ydCB1c2VUb2tlbiBmcm9tICcuLi8uLi9ob29rcy91c2VUb2tlbic7XG5cbi8vIFZlbmRvcnNcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuY29uc3QgdXNlU2Nyb2xsQmFyU3R5bGUgPSAoKSA9PiB7XG4gICAgY29uc3QgdG9rZW4gPSB1c2VUb2tlbigpO1xuXG4gICAgcmV0dXJuIGNzc2BcbiAgICAgICAgLyogaGFjayDlhajlsYByY+iZmuaLn+a7muWKqOadoSAqL1xuICAgICAgICAucmMtdmlydHVhbC1saXN0LXNjcm9sbGJhciB7XG4gICAgICAgICAgICB3aWR0aDogJHt0b2tlblsnc2l6ZS1zdGF0aWMtNiddfXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAucmMtdmlydHVhbC1saXN0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgICAgICB3aWR0aDogJHt0b2tlblsnc2l6ZS1zdGF0aWMtNiddfXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Rva2VuW1xuICAgICAgICAgICAgICAgICdjb2xvci1iZy1vdmVybGF5J1xuICAgICAgICAgICAgXX0gIWltcG9ydGFudDsgLyog5ruR5Z2X6aKc6ImyICovXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAke3Rva2VuW1xuICAgICAgICAgICAgICAgICdzaXplLXN0YXRpYy02J1xuICAgICAgICAgICAgXX1weCAhaW1wb3J0YW50OyAvKiDmu5HlnZflnIbop5IgKi9cbiAgICAgICAgfVxuICAgIGA7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VTY3JvbGxCYXJTdHlsZTtcbiJdfQ== */"));
};
var _default = exports.default = useScrollBarStyle;