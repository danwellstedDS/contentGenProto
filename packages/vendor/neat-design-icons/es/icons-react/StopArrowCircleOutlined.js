var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react';
import StopArrowCircleOutlinedSVG from '../icons-svg/lib/StopArrowCircleOutlined';
import Icon from '../components';
var StopArrowCircleOutlined = function (props, ref) { return (_jsx(Icon, __assign({}, props, { isTwoTone: false, ref: ref, component: StopArrowCircleOutlinedSVG }))); };
if (process.env.NODE_ENV !== 'production') {
    StopArrowCircleOutlined.displayName = 'StopArrowCircleOutlined';
}
export default React.forwardRef(StopArrowCircleOutlined);
