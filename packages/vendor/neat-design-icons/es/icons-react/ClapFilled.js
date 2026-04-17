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
import ClapFilledSVG from '../icons-svg/lib/ClapFilled';
import Icon from '../components';
var ClapFilled = function (props, ref) { return (_jsx(Icon, __assign({}, props, { isTwoTone: false, ref: ref, component: ClapFilledSVG }))); };
if (process.env.NODE_ENV !== 'production') {
    ClapFilled.displayName = 'ClapFilled';
}
export default React.forwardRef(ClapFilled);
