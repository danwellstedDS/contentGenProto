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
import ArrowDownSMSVG from '../icons-svg/lib/ArrowDownSM';
import Icon from '../components';
var ArrowDownSM = function (props, ref) { return (_jsx(Icon, __assign({}, props, { isTwoTone: false, ref: ref, component: ArrowDownSMSVG }))); };
if (process.env.NODE_ENV !== 'production') {
    ArrowDownSM.displayName = 'ArrowDownSM';
}
export default React.forwardRef(ArrowDownSM);
