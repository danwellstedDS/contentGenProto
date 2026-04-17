"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = genToken;
var _neatDesignToken = require("@derbysoft/neat-design-token");
var _utils = require("../../utils");
/**
 * @file genToken.ts
 * @author pipi(peter.rao@derbysoft.net)
 */

// Statics

// Types

function genToken(token) {
  return {
    /**
     * Color
     */
    'tooltip-color-text-dark': token['color-text-inverse'],
    'tooltip-color-bg-dark': (0, _utils.applyHexOpacity)(_neatDesignToken.ladderColor['neutral-28'], 90),
    'tooltip-color-text-light': token['color-text-primary'],
    'tooltip-color-bg-light': (0, _utils.applyHexOpacity)(_neatDesignToken.ladderColor['neutral-0'], 90),
    /**
     * Font Size
     */
    'tooltip-font-size-medium': token['font-size-body-medium'],
    /**
     * Line Height
     */
    'tooltip-line-height-medium': token['line-height-static-20'],
    /**
     * Spacing
     */
    'tooltip-gap': token['spacing-tight'],
    'tooltip-padding-v': token['spacing-tight'],
    'tooltip-padding-h': token['spacing-base-tight'],
    /**
     * Border Radius
     */
    'toolitp-border-radius': token['border-radius-base']
  };
}