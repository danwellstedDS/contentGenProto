/**
 * @file Radio.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 * @author pipi(peter.rao@derbysoft.net)
 */
/// <reference types="react" />
import type { RadioProps as AntRadioProps } from 'antd';
import type { RadioRef } from 'antd/lib/radio';
import type { SizeType } from '../hooks/useConvertSize';
export type RadioProps = AntRadioProps & {
    size?: SizeType;
    state?: 'error';
};
declare const Radio: React.ForwardRefExoticComponent<AntRadioProps & {
    size?: SizeType;
    state?: 'error';
} & React.RefAttributes<RadioRef>>;
export default Radio;
