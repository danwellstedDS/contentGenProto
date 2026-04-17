/**
 * @file Rate.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 * @author rzh(peter.rao@derbysoft.net)
 */
/// <reference types="react" />
import { RateProps as AntRateProps } from 'antd';
import type { SizeType } from '../hooks/useConvertSize';
export type RateProps = AntRateProps & {
    size?: SizeType;
};
declare const Rate: React.ForwardRefExoticComponent<AntRateProps & {
    size?: SizeType;
} & React.RefAttributes<HTMLElement>>;
export default Rate;
