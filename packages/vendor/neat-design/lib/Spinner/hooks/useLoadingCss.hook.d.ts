/**
 * @file useLoadingStyles.hook.ts
 * @author pipi(pter.rao@derbysoft.net)
 */
import { ElementType } from "react";
export type LoadingGeneratorType = {
    color?: string;
    size?: number | string;
    circleThickness?: number;
    spinning?: boolean;
    animation?: {
        time?: number;
        bezier?: string;
    };
    as?: ElementType;
};
declare const useLoadingCss: (params?: LoadingGeneratorType) => string;
export default useLoadingCss;
