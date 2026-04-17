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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import { useInsertStyles } from '../utils';
var IconBase = function (props) {
    var Icon = props.icon, className = props.className, onClick = props.onClick, style = props.style, twoToneColors = props.twoToneColors, restProps = __rest(props, ["icon", "className", "onClick", "style", "twoToneColors"]);
    var svgRef = React.useRef();
    useInsertStyles(svgRef);
    return _jsx(Icon, __assign({ className: className, onClick: onClick, style: style, width: '1em', height: '1em', fill: 'currentColor', "aria-hidden": 'true' }, restProps, twoToneColors, { ref: svgRef }));
};
IconBase.displayName = 'IconReact';
export default IconBase;
