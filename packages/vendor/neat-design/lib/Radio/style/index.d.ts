/**
 * @file index.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 * @author pipi(peter.rao@derbysoft.net)
 */
import type { SizeType } from '../../hooks/useConvertSize';
declare const useStyle: (props?: {
    father?: string;
    size?: SizeType;
    state?: 'error';
}) => import("@emotion/react").SerializedStyles;
export default useStyle;
