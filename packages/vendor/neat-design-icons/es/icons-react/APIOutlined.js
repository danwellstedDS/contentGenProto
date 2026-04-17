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
import APIOutlinedSVG from '../icons-svg/lib/APIOutlined';
import Icon from '../components';
var APIOutlined = function (props, ref) { return (_jsx(Icon, __assign({}, props, { isTwoTone: false, ref: ref, component: APIOutlinedSVG }))); };
if (process.env.NODE_ENV !== 'production') {
    APIOutlined.displayName = 'APIOutlined';
}
export default React.forwardRef(APIOutlined);
