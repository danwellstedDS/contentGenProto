function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * @file Util.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Types

/**
 * @param option
 * @param fieldNames
 * @param callback
 * @param depth
 * @param parentNode
 * @param path
 */
export function preOrderTraverse(option, fieldNames, callback) {
  var depth = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var parentNode = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
  var path = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [];
  var childrenKey = (fieldNames === null || fieldNames === void 0 ? void 0 : fieldNames.children) || 'children';
  var nextPath = [].concat(_toConsumableArray(path), [option]);
  if (callback(option, parentNode, depth, nextPath) === false) {
    return false;
  }
  if (option !== null && option !== void 0 && option[childrenKey] && option[childrenKey].length > 0) {
    for (var i = 0, len = option[childrenKey].length; i < len; i++) {
      if (preOrderTraverse(option[childrenKey][i], fieldNames, callback, depth + 1, option, nextPath) === false) {
        return false;
      }
    }
  }
}

/**
 * Get select all value when showCheckedStrategy === AntCascader.SHOW_CHILD
 * @param options
 * @param valueKey
 * @param childrenKey
 * @param valuePath
 */
export function getSelectAllValue(options, valueKey, childrenKey) {
  var valuePath = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  if (!options || options.length < 1) {
    return [];
  }
  return options.reduce(function (result, option) {
    var _option$childrenKey;
    var nextResult = _toConsumableArray(result);
    var value = option === null || option === void 0 ? void 0 : option[valueKey];
    var nextValuePath = [].concat(_toConsumableArray(valuePath), [value]);
    if ((option === null || option === void 0 || (_option$childrenKey = option[childrenKey]) === null || _option$childrenKey === void 0 ? void 0 : _option$childrenKey.length) > 0) {
      nextResult.push.apply(nextResult, _toConsumableArray(getSelectAllValue(option === null || option === void 0 ? void 0 : option[childrenKey], valueKey, childrenKey, nextValuePath)));
    } else {
      nextResult.push(nextValuePath);
    }
    return nextResult;
  }, []);
}

/**
 * Get select all value when showCheckedStrategy === AntCascader.SHOW_CHILD
 * @param optionsPaths
 * @param valueKey
 * @param childrenKey
 * @param valuePath
 */
export function getSelectAllValueByPaths(optionsPaths, valueKey, childrenKey) {
  var valuePath = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  if (!optionsPaths || optionsPaths.length < 1) {
    return [];
  }
  return optionsPaths.map(function (options) {
    return getSelectAllValue(options, valueKey, childrenKey, valuePath);
  });
}