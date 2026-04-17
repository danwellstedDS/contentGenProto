/**
 * @file index.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 * @author rzh(peter.rao@derbysoft.net)
 */
import { type SizeType } from '../../hooks/useConvertSize';
declare const useStyle: ({ size }: {
    size?: SizeType;
}) => import("@emotion/react").SerializedStyles;
export default useStyle;
