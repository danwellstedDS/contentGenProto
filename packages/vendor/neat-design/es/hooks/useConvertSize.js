export default (function (size) {
  switch (size) {
    case 'large':
    case 'small':
      return size;
    case 'medium':
      return 'default';
    case void 0:
      return undefined;
    default:
      console.warn("This warning was found while converting the 'antd' property: ", "The 'size: ".concat(size, "' you passed is not supported. It will be automatically adapted to 'undefined'."));
      return undefined;
  }
});
export var useConvertSizeMediumAsMiddle = function useConvertSizeMediumAsMiddle(size) {
  switch (size) {
    case 'large':
    case 'small':
      return size;
    case 'medium':
      return 'middle';
    case void 0:
      return undefined;
    default:
      console.warn("This warning was found while converting the 'select' property: ", "The 'size: ".concat(size, "' you passed is not supported. It will be automatically adapted to 'undefined'."));
      return undefined;
  }
};

/**
 * This function is recommended when concatenating `classnames`
 * @description It's sure it will get 'size' By rule of Neat-Design
 * @param size
 * @returns SizeType
 */
export function rigorousNeatSize(size) {
  switch (size) {
    case 'large':
    case 'small':
    case 'medium':
      return size;
    case void 0:
      return 'medium';
    default:
      console.warn("The 'size: ".concat(size, "' you passed is not supported. It will be automatically adapted to 'medium'."));
      return 'medium';
  }
}