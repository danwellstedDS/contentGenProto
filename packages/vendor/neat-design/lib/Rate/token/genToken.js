"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = genToken;
var _neatDesignToken = require("@derbysoft/neat-design-token");
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
    'rate-color-default': _neatDesignToken.ladderColor['neutral-5'],
    'rate-color-selected': _neatDesignToken.ladderColor['amber-5'],
    'rate-color-normal': _neatDesignToken.ladderColor['deep-orange-5'],
    'rate-color-positive': _neatDesignToken.ladderColor['green-5'],
    'rate-color-negative': _neatDesignToken.ladderColor['red-4'],
    'select-color-text': token['color-text-primary'],
    /**
     * Font Size
     */
    'rate-font-size-small': token['font-size-body-small'],
    'rate-font-size-medium': token['font-size-body-medium'],
    'rate-font-size-large': token['font-size-body-large'],
    /**
     * Size
     */
    'rate-size-small': token['size-static-18'],
    'rate-size-medium': token['size-3x'],
    'rate-size-large': token['size-4x'],
    /**
     * Spacing
     */
    'rate-gap': token['spacing-base'],
    'rate-padding': token['spacing-super-tight']
  };
}