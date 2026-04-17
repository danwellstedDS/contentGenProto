/**
 * @file index.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import { type SizeType } from '../../hooks/useConvertSize';
import type { ControlsVisibleType, InputDirectionType } from '../InputNumber';
declare const useStyle: ({ size, controlsVisible, inputDirection, showSuffix, }: {
    size: SizeType;
    controlsVisible: ControlsVisibleType;
    inputDirection: InputDirectionType;
    showSuffix: boolean;
}) => import("@emotion/react").SerializedStyles;
export default useStyle;
