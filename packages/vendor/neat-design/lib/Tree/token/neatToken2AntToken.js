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
  var treeToken = theme.components.Tree;
  return {
    titleHeight: parseInt(treeToken['tree-line-height-medium']),
    indentSize: treeToken['tree-size-fill-medium'],
    nodeHoverBg: treeToken['tree-color-bg-hover'],
    nodeHoverColor: treeToken['tree-color-text'],
    nodeSelectedBg: 'transparent',
    nodeSelectedColor: treeToken['tree-color-text'],
    directoryNodeSelectedColor: treeToken['tree-color-text'],
    directoryNodeSelectedBg: 'transparent'
  };
}