import { type TwoToneColorsTypes } from '.';
export interface IconContextProps {
    prefixCls?: string;
    rootClassName?: string;
    csp?: {
        nonce?: string;
    };
    twoToneColors?: TwoToneColorsTypes;
    disabledTwoToneColors?: TwoToneColorsTypes;
    inverseTwoToneColors?: TwoToneColorsTypes;
}
declare const IconContext: import("react").Context<IconContextProps>;
export default IconContext;
