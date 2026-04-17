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
import Icon from '../components';
var LoadingSMStatic = React.forwardRef(function (_a, ref) {
    var className = _a.className;
    return _jsx("span", { className: className, style: {
            display: 'inline-block',
            width: '1em',
            height: '1em',
            backgroundImage: 'url(data:image/png;base64,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)',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }, ref: ref });
});
var icon = function (props, ref) { return (_jsx(Icon, __assign({}, props, { ref: ref, component: LoadingSMStatic }))); };
if (process.env.NODE_ENV !== 'production') {
    icon.displayName = 'LoadingSM';
}
var LoadingSM = React.forwardRef(icon);
export default LoadingSM;
