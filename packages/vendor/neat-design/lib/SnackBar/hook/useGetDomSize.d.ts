/**
 * @file useGetDomSize.ts
 * @author minglong.zhao(minglong.zhao@derbysoft.com)
 */
import type { SizeInfo } from 'rc-resize-observer';
import type { SnackBarProps } from '../types';
type Props = {
    onResize: (size: SizeInfo) => void;
} & Pick<SnackBarProps, 'getContainer'>;
declare const useGetDomSize: ({ onResize, getContainer }: Props) => void;
export default useGetDomSize;
