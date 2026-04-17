/**
 * @file useLoadingStyles.hook.ts
 * @author pipi(pter.rao@derbysoft.net)
 */
import React from "react";
import { LoadingGeneratorType } from "./hooks/useLoadingCss.hook";
declare const InternalLoading: (props: LoadingGeneratorType) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
export default InternalLoading;
