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
import RowComfortableOutlinedSVG from '../icons-svg/lib/RowComfortableOutlined';
import Icon from '../components';
var RowComfortableOutlined = function (props, ref) { return (_jsx(Icon, __assign({}, props, { isTwoTone: false, ref: ref, component: RowComfortableOutlinedSVG }))); };
if (process.env.NODE_ENV !== 'production') {
    RowComfortableOutlined.displayName = 'RowComfortableOutlined';
}
export default React.forwardRef(RowComfortableOutlined);
