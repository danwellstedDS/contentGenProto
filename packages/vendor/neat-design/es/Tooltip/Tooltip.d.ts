/**
 * @file Tooltip.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 * @author rzh(peter.rao@derbysoft.net)
 */
/// <reference types="react" />
import type { TooltipProps as AntTooltipProps } from 'antd';
import type { TooltipRef } from 'antd/lib/tooltip';
export type TooltipProps = AntTooltipProps & {
    /**
     * Static mode of `tooltip`
     * when set `color` prop, the background of the `tooltip` will display as the custom `color`,
     * if not, the `default` background & text color will be like the mode `dark`.
     * So, When you feel that the background and text color are too light, you can try to set mode as `light`.
     */
    mode?: 'dark' | 'light';
};
declare const Tooltip: React.ForwardRefExoticComponent<TooltipProps & React.RefAttributes<TooltipRef>>;
export default Tooltip;
