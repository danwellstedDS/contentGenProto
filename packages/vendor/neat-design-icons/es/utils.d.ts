import React from 'react';
export declare function warning(valid: boolean, message: string): void;
export declare function normalizeAttrs(attrs?: Attrs): Attrs;
export type Attrs = Record<string, string>;
export declare function normalizeTwoToneColors(twoToneColor: string | [string, string] | undefined): string[];
export declare const svgBaseProps: {
    width: string;
    height: string;
    fill: string;
    'aria-hidden': string;
    focusable: string;
};
export declare const iconStyles = "\n.neaticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.neaticon > * {\n  line-height: 1;\n}\n\n.neaticon svg {\n  display: inline-block;\n}\n\n.neaticon::before {\n  display: none;\n}\n\n.neaticon .neaticon-icon {\n  display: block;\n}\n\n.neaticon[tabindex] {\n  cursor: pointer;\n}\n\n.neaticon-spin::before,\n.neaticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n.neaticon-spin-anti::before,\n.neaticon-spin-anti {\n  display: inline-block;\n  -webkit-animation: loadingCircleAnti 1s infinite linear;\n  animation: loadingCircleAnti 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircleAnti {\n  100% {\n    -webkit-transform: rotate(-360deg);\n    transform: rotate(-360deg);\n  }\n}\n\n@keyframes loadingCircleAnti {\n  100% {\n    -webkit-transform: rotate(-360deg);\n    transform: rotate(-360deg);\n  }\n}\n";
export declare const useInsertStyles: (eleRef: React.RefObject<SVGSVGElement | HTMLElement>) => void;
