var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file card.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Types

export default (function (_ref) {
  var css = _ref.css,
    prefixCls = _ref.prefixCls,
    componentsToken = _ref.componentsToken;
  var tabsToken = componentsToken.Tabs;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        &.", "-tabs-card {\n            .", "-tabs-tab {\n                border: none;\n                border-bottom: 2px solid ", ";\n                transition: none;\n\n                &:hover {\n                    background: ", ";\n                }\n\n                &:active {\n                    background: ", ";\n                }\n\n                &.", "-tabs-tab-active {\n                    border: 2px solid ", ";\n                    border-bottom: none;\n\n                    &:hover {\n                        background: ", ";\n                    }\n\n                    &:active {\n                        background: ", ";\n                    }\n                }\n\n                &.", "-tabs-tab-disabled {\n                    background: ", ";\n\n                    &:hover {\n                        background: ", ";\n                    }\n\n                    &:active {\n                        background: ", ";\n                    }\n                }\n            }\n\n            &.", "-tabs-top {\n                > .", "-tabs-nav\n                    .", "-tabs-tab\n                    + .", "-tabs-tab {\n                    margin-left: 8px;\n                }\n            }\n        }\n    "])), prefixCls, prefixCls, tabsToken['tabs-color-border'], tabsToken['tabs-color-bg-item-hover'], tabsToken['tabs-color-bg-item-press'], prefixCls, tabsToken['tabs-color-border'], tabsToken['tabs-color-bg-item-active'], tabsToken['tabs-color-bg-item-active'], prefixCls, tabsToken['tabs-color-bg-item-disabled'], tabsToken['tabs-color-bg-item-disabled'], tabsToken['tabs-color-bg-item-disabled'], prefixCls, prefixCls, prefixCls, prefixCls);
});