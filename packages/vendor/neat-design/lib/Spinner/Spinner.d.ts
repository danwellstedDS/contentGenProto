/**
 * @file Spinner.tsx
 * @author pipi(peter.rao@derbysoft.net)
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import React from 'react';
import SpinnerSuccess from './Success';
import SpinnerError from './Error';
import type { SpinProps as AntSpinProps } from 'antd';
import type { SizeType } from '../hooks/useConvertSize';
export type SpinnerPropsModeType = 'default' | 'black' | 'inverse';
export type SpinnerProps = Omit<AntSpinProps, 'size'> & {
    size?: SizeType;
    tipPlacement?: 'below' | 'above' | 'left' | 'right';
    mode?: SpinnerPropsModeType;
};
type SpinnerType = React.FC<SpinnerProps> & {
    setDefaultIndicator: (indicator: React.ReactNode) => void;
    Success: typeof SpinnerSuccess;
    Error: typeof SpinnerError;
};
declare const Spinner: SpinnerType;
export default Spinner;
