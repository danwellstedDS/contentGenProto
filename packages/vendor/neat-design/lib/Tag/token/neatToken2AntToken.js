"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = neatToken2AntToken;
/**
 * @file neatToken2AntToken.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Types

function neatToken2AntToken(theme) {
  var token = theme.components.Tag;
  return {
    defaultBg: token['tag-color-bg-light-blue'],
    defaultColor: token['tag-color-text-light-blue']
  };
}