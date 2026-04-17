"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ladderColor = _interopRequireDefault(require("../color/ladderColor"));
var _rgba = _interopRequireDefault(require("../util/rgba"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * @file powerBlack.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */ // Statics
// Vendors
// Types

var shadowFocus = 'rgba(0, 19, 28, 0.2)';
var shadowFocusNegative = 'rgba(226, 58, 58, 0.2)';
var token = _objectSpread(_objectSpread({}, _ladderColor.default), {}, {
  /**
   * Primary Color
   */
  'color-primary': _ladderColor.default['neutral-28'],
  'color-primary-hover': _ladderColor.default['neutral-20'],
  'color-primary-focus': _ladderColor.default['neutral-28'],
  'color-primary-press': _ladderColor.default['neutral-24'],
  'color-primary-sunken': _ladderColor.default['neutral-1'],
  'color-primary-enhance': _ladderColor.default['neutral-3'],
  /**
   * Info Color
   */
  'color-info': _ladderColor.default['blue-6'],
  'color-info-hover': _ladderColor.default['blue-5'],
  'color-info-focus': _ladderColor.default['blue-7'],
  'color-info-press': _ladderColor.default['blue-8'],
  'color-info-sunken': _ladderColor.default['blue-0'],
  'color-info-enhance': _ladderColor.default['blue-3'],
  /**
   * Positive Color
   */
  'color-positive': _ladderColor.default['green-6'],
  'color-positive-hover': _ladderColor.default['green-5'],
  'color-positive-focus': _ladderColor.default['green-7'],
  'color-positive-press': _ladderColor.default['green-8'],
  'color-positive-sunken': _ladderColor.default['green-0'],
  'color-positive-enhance': _ladderColor.default['green-3'],
  /**
   * Notice Color
   */
  'color-notice': _ladderColor.default['amber-6'],
  'color-notice-hover': _ladderColor.default['amber-5'],
  'color-notice-focus': _ladderColor.default['amber-7'],
  'color-notice-press': _ladderColor.default['amber-8'],
  'color-notice-sunken': _ladderColor.default['amber-0'],
  'color-notice-enhance': _ladderColor.default['amber-3'],
  /**
   * Negative Color
   */
  'color-negative': _ladderColor.default['red-6'],
  'color-negative-hover': _ladderColor.default['red-5'],
  'color-negative-focus': _ladderColor.default['red-7'],
  'color-negative-press': _ladderColor.default['red-8'],
  'color-negative-sunken': _ladderColor.default['red-0'],
  'color-negative-enhance': _ladderColor.default['red-3'],
  /**
   * Text Color
   */
  'color-text-primary': _ladderColor.default['neutral-28'],
  'color-text-secondary': _ladderColor.default['neutral-17'],
  'color-text-placeholder': _ladderColor.default['neutral-12'],
  'color-text-disabled': _ladderColor.default['neutral-12'],
  'color-text-negative': _ladderColor.default['red-6'],
  'color-text-inverse': _ladderColor.default['neutral-0'],
  'color-text-link': _ladderColor.default['blue-6'],
  'color-text-link-hover': _ladderColor.default['blue-5'],
  'color-text-link-disabled': _ladderColor.default['neutral-12'],
  'color-text-link-focus': _ladderColor.default['blue-7'],
  'color-text-link-press': _ladderColor.default['blue-8'],
  /**
   * Border Color
   */
  'color-border': _ladderColor.default['neutral-8'],
  'color-border-enhance': _ladderColor.default['neutral-12'],
  'color-border-hover': _ladderColor.default['neutral-20'],
  'color-border-disabled': _ladderColor.default['neutral-5'],
  'color-border-divider': _ladderColor.default['neutral-5'],
  'color-border-inverse': _ladderColor.default['neutral-0'],
  /**
   * Background Color
   */
  'color-bg': _ladderColor.default['neutral-0'],
  'color-bg-sunken': _ladderColor.default['neutral-1'],
  'color-bg-enhance': _ladderColor.default['neutral-2'],
  'color-bg-raised': _ladderColor.default['neutral-3'],
  'color-bg-overlay': (0, _rgba.default)(_ladderColor.default['neutral-29'], 0.3),
  'color-bg-hover': _ladderColor.default['aqua-0'],
  'color-bg-press': _ladderColor.default['aqua-1'],
  'color-bg-disabled': _ladderColor.default['neutral-1'],
  'color-bg-on-disabled': _ladderColor.default['neutral-5'],
  /**
   * Icon Color
   */
  'color-icon': _ladderColor.default['neutral-17'],
  'color-icon-secondary': _ladderColor.default['neutral-8'],
  'color-icon-enhance': _ladderColor.default['neutral-28'],
  'color-icon-disabled': _ladderColor.default['neutral-12'],
  'color-icon-secondary-disabled': _ladderColor.default['neutral-5'],
  'color-icon-inverse': _ladderColor.default['neutral-0'],
  /**
   * Shadow Color
   */
  'color-shadow-focus': shadowFocus,
  'color-shadow-focus-negative': shadowFocusNegative,
  /**
   * Font Family
   */
  'font-family': 'Inter, "Noto Sans SC", "PingFang SC", "Microsoft YaHei", Arial, sans-serif',
  'font-family-code': '"Noto Sans Mono", "Roboto Mono", monospace',
  'font-family-number': '"Noto Sans", Arial, sans-serif',
  'font-family-sc': 'Inter, "Noto Sans SC", "PingFang SC", "Microsoft YaHei", Arial, sans-serif',
  'font-family-jp': 'Inter, "Noto Sans JP", "游ゴシック体", "Yu Gothic", Arial, sans-serif',
  /**
   * Font Size
   */
  'font-size-header-1': 36,
  'font-size-header-2': 32,
  'font-size-header-3': 28,
  'font-size-header-4': 24,
  'font-size-header-5': 20,
  'font-size-body-extra-large': 18,
  'font-size-body-large': 16,
  'font-size-body-medium': 14,
  'font-size-body-small': 12,
  'font-size-footnote': 12,
  /**
   * Font Weight
   */
  'font-weight-thin': 100,
  'font-weight-extralight': 200,
  'font-weight-light': 300,
  'font-weight-regular': 400,
  'font-weight-medium': 500,
  'font-weight-semibold': 600,
  'font-weight-bold': 700,
  'font-weight-extrabold': 800,
  'font-weight-black': 900,
  /**
   * Line Height
   */
  'line-height-tight': 1,
  'line-height-slightly-tight': 1.25,
  'line-height-normal': 1.5,
  'line-height-slightly-loose': 1.75,
  'line-height-loose': 2,
  'line-height-static-12': '12px',
  'line-height-static-14': '14px',
  'line-height-static-16': '16px',
  'line-height-static-20': '20px',
  'line-height-static-24': '24px',
  'line-height-static-28': '28px',
  'line-height-static-32': '32px',
  'line-height-static-36': '36px',
  'line-height-static-40': '40px',
  'line-height-static-44': '44px',
  /**
   * Border-Radius
   */
  'border-radius-none': 0,
  'border-radius-small': 4,
  'border-radius-base': 6,
  'border-radius-circle': '50%',
  /**
   * Opacity
   */
  'opacity-0': 0,
  'opacity-1': 0.1,
  'opacity-2': 0.2,
  'opacity-3': 0.3,
  'opacity-4': 0.4,
  'opacity-5': 0.5,
  'opacity-6': 0.6,
  'opacity-7': 0.7,
  'opacity-8': 0.8,
  'opacity-9': 0.9,
  /**
   * Size
   */
  'size-none': 0,
  'size-static-1': 1,
  'size-static-2': 2,
  'size-static-4': 4,
  'size-static-6': 6,
  'size-static-10': 10,
  'size-static-12': 12,
  'size-static-14': 14,
  'size-static-18': 18,
  'size-static-20': 20,
  'size-static-28': 28,
  'size-static-36': 36,
  'size-base': 8,
  'size-2x': 16,
  'size-3x': 24,
  'size-4x': 32,
  'size-5x': 40,
  'size-6x': 48,
  'size-7x': 56,
  'size-8x': 64,
  'size-9x': 72,
  'size-10x': 80,
  'size-13x': 104,
  'size-15x': 120,
  'size-16x': 128,
  'size-17x': 136,
  'size-22x': 176,
  'size-32x': 256,
  'size-40x': 320,
  'size-50x': 400,
  'size-60x': 480,
  'size-70x': 560,
  'size-75x': 600,
  'size-120x': 960,
  'size-full': '100%',
  /**
   * Spacing
   */
  'spacing-none': 0,
  'spacing-static-1': 1,
  'spacing-super-tight': 2,
  'spacing-static-3': 3,
  'spacing-extra-tight': 4,
  'spacing-slightly-tight': 6,
  'spacing-tight': 8,
  'spacing-static-10': 10,
  'spacing-base-tight': 12,
  'spacing-static-14': 14,
  'spacing-base': 16,
  'spacing-base-loose': 20,
  'spacing-loose': 24,
  'spacing-slightly-loose': 28,
  'spacing-extra-loose': 32,
  'spacing-static-36': 36,
  'spacing-super-loose': 40,
  'spacing-static-48': 48,
  /**
   * Motion
   */
  'motion-easing': 'cubic-bezier(0.4, 0.0, 0.2, 1)',
  'motion-easing-decelerated': 'cubic-bezier(0.0, 0.0, 0.2, 1)',
  'motion-easing-accelerated': 'cubic-bezier(0.4, 0.0, 1, 1)',
  'motion-duration-tiny': 70,
  'motion-duration-short': 110,
  'motion-duration': 150,
  'motion-duration-middle': 240,
  'motion-duration-long': 400,
  'motion-duration-extra-long': 700,
  /**
   * Shadow
   */
  'shadow-0': 'none',
  'shadow-1': '0 0.3px 1.8px 0 rgba(0, 0, 0, 0.1), 0 1.6px 7.2px 0 rgba(0, 0, 0, 0.13)',
  'shadow-2': '0 0.6px 3.6px 0 rgba(0, 0, 0, 0.1), 0 3.2px 14.4px 0 rgba(0, 0, 0, 0.13)',
  'shadow-3': '0 1.2px 7.2px 0 rgba(0, 0, 0, 0.1), 0 6.4px 28.8px 0 rgba(0, 0, 0, 0.13)',
  'shadow-4': '0 4.8px 28.8px 0 rgba(0, 0, 0, 0.1), 0 9.6px 57.6px 0 rgba(0, 0, 0, 0.2)',
  'shadow-focus': "0 0 0 2px ".concat(shadowFocus),
  'shadow-focus-negative': "0 0 0 2px ".concat(shadowFocusNegative)
});
var _default = exports.default = token;