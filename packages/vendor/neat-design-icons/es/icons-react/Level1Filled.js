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
import Level1FilledSVG from '../icons-svg/lib/Level1Filled';
import Icon from '../components';
var Level1Filled = function (props, ref) { return (_jsx(Icon, __assign({}, props, { isTwoTone: false, ref: ref, component: Level1FilledSVG }))); };
if (process.env.NODE_ENV !== 'production') {
    Level1Filled.displayName = 'Level1Filled';
}
export default React.forwardRef(Level1Filled);
