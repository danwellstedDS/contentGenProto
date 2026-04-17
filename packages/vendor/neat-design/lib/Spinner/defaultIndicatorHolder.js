"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHolder = getHolder;
exports.setHolder = setHolder;
var globalIndicator = null;
function setHolder(indicator) {
  globalIndicator = indicator;
}
function getHolder() {
  return globalIndicator;
}