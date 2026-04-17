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
// Seems this is used for iconFont
import React from 'react';
import classNames from 'classnames';
import { useComposeRef } from 'rc-util/lib/ref';
import Context from './Context';
import { svgBaseProps, warning, useInsertStyles } from '../utils';
var Icon = React.forwardRef(function (props, ref) {
    var _a;
    var 
    // affect outter <i>...</i>
    className = props.className, 
    // affect inner <svg>...</svg>
    Component = props.component, viewBox = props.viewBox, spin = props.spin, rotate = props.rotate, tabIndex = props.tabIndex, onClick = props.onClick, 
    // children
    children = props.children, restProps = __rest(props, ["className", "component", "viewBox", "spin", "rotate", "tabIndex", "onClick", "children"]);
    var iconRef = React.useRef();
    var mergedRef = useComposeRef(iconRef, ref);
    warning(Boolean(Component || children), 'Should have `component` prop or `children`.');
    useInsertStyles(iconRef);
    var _b = React.useContext(Context), _c = _b.prefixCls, prefixCls = _c === void 0 ? 'neaticon' : _c, rootClassName = _b.rootClassName;
    var classString = classNames(rootClassName, prefixCls, className);
    var svgClassString = classNames((_a = {},
        _a["".concat(prefixCls, "-spin")] = !!spin,
        _a));
    var svgStyle = rotate
        ? {
            msTransform: "rotate(".concat(rotate, "deg)"),
            transform: "rotate(".concat(rotate, "deg)"),
        }
        : undefined;
    var innerSvgProps = __assign(__assign({}, svgBaseProps), { className: svgClassString, style: svgStyle, viewBox: viewBox });
    if (!viewBox) {
        delete innerSvgProps.viewBox;
    }
    // component > children
    var renderInnerNode = function () {
        if (Component) {
            return _jsx(Component, __assign({}, innerSvgProps, { children: children }));
        }
        if (children) {
            warning(Boolean(viewBox) ||
                (React.Children.count(children) === 1 &&
                    React.isValidElement(children) &&
                    React.Children.only(children).type === 'use'), 'Make sure that you provide correct `viewBox`' +
                ' prop (default `0 0 1024 1024`) to the icon.');
            return (_jsx("svg", __assign({}, innerSvgProps, { viewBox: viewBox, children: children })));
        }
        return null;
    };
    var iconTabIndex = tabIndex;
    if (iconTabIndex === undefined && onClick) {
        iconTabIndex = -1;
    }
    return (_jsx("span", __assign({ role: "img" }, restProps, { ref: mergedRef, tabIndex: iconTabIndex, onClick: onClick, className: classString, children: renderInnerNode() })));
});
Icon.displayName = 'Icon';
export default Icon;
