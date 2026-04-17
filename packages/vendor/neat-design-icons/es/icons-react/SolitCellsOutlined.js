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
import SolitCellsOutlinedSVG from '../icons-svg/lib/SolitCellsOutlined';
import Icon from '../components';
var SolitCellsOutlined = function (props, ref) { return (_jsx(Icon, __assign({}, props, { isTwoTone: false, ref: ref, component: SolitCellsOutlinedSVG }))); };
if (process.env.NODE_ENV !== 'production') {
    SolitCellsOutlined.displayName = 'SolitCellsOutlined';
}
export default React.forwardRef(SolitCellsOutlined);
