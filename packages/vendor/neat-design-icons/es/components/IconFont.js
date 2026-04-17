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
import Icon from './Icon';
var customCache = new Set();
function isValidCustomScriptUrl(scriptUrl) {
    return Boolean(typeof scriptUrl === 'string'
        && scriptUrl.length
        && !customCache.has(scriptUrl));
}
function createScriptUrlElements(scriptUrls, index) {
    if (index === void 0) { index = 0; }
    var currentScriptUrl = scriptUrls[index];
    if (isValidCustomScriptUrl(currentScriptUrl)) {
        var script = document.createElement('script');
        script.setAttribute('src', currentScriptUrl);
        script.setAttribute('data-namespace', currentScriptUrl);
        if (scriptUrls.length > index + 1) {
            script.onload = function () {
                createScriptUrlElements(scriptUrls, index + 1);
            };
            script.onerror = function () {
                createScriptUrlElements(scriptUrls, index + 1);
            };
        }
        customCache.add(currentScriptUrl);
        document.body.appendChild(script);
    }
}
export default function create(options) {
    if (options === void 0) { options = {}; }
    var scriptUrl = options.scriptUrl, _a = options.extraCommonProps, extraCommonProps = _a === void 0 ? {} : _a;
    /**
     * DOM API required.
     * Make sure in browser environment.
     * The Custom Icon will create a <script/>
     * that loads SVG symbols and insert the SVG Element into the document body.
     */
    if (scriptUrl &&
        typeof document !== 'undefined' &&
        typeof window !== 'undefined' &&
        typeof document.createElement === 'function') {
        if (Array.isArray(scriptUrl)) {
            // 因为iconfont资源会把svg插入before，所以前加载相同type会覆盖后加载，为了数组覆盖顺序，倒叙插入
            createScriptUrlElements(scriptUrl.reverse());
        }
        else {
            createScriptUrlElements([scriptUrl]);
        }
    }
    var Iconfont = React.forwardRef(function (props, ref) {
        var type = props.type, children = props.children, restProps = __rest(props, ["type", "children"]);
        // children > type
        var content = null;
        if (props.type) {
            content = _jsx("use", { xlinkHref: "#".concat(type) });
        }
        if (children) {
            content = children;
        }
        return (_jsx(Icon, __assign({}, extraCommonProps, restProps, { ref: ref, children: content })));
    });
    Iconfont.displayName = 'Iconfont';
    return Iconfont;
}
