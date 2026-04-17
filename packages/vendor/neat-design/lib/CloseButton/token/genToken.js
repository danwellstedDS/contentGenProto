"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = genToken;
var _neatDesignToken = require("@derbysoft/neat-design-token");
/**
 * @file genToken.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Statics

// Vendors

// Types

function genToken(token) {
  return {
    'close-btn-color': (0, _neatDesignToken.rgba)(_neatDesignToken.ladderColor['neutral-29'], 0.2),
    'close-btn-color-hover': (0, _neatDesignToken.rgba)(_neatDesignToken.ladderColor['neutral-29'], 0.4),
    'close-btn-color-inverse': (0, _neatDesignToken.rgba)(_neatDesignToken.ladderColor['neutral-0'], 0.8),
    'close-btn-color-inverse-hover': _neatDesignToken.ladderColor['neutral-0'],
    'close-btn-size': token['size-2x']
  };
}