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
import ReportMonthlyOutlinedSVG from '../icons-svg/lib/ReportMonthlyOutlined';
import Icon from '../components';
var ReportMonthlyOutlined = function (props, ref) { return (_jsx(Icon, __assign({}, props, { isTwoTone: false, ref: ref, component: ReportMonthlyOutlinedSVG }))); };
if (process.env.NODE_ENV !== 'production') {
    ReportMonthlyOutlined.displayName = 'ReportMonthlyOutlined';
}
export default React.forwardRef(ReportMonthlyOutlined);
