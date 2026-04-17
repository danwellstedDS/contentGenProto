/**
 * @file useGetWindowSize.ts
 * @author minglong.zhao(minglong.zhao@derbysoft.com)
 */
import type { SizeInfo } from 'rc-resize-observer';
type Props = {
    onResize: (size: SizeInfo) => void;
};
declare const useGetWindowSize: ({ onResize }: Props) => void;
export default useGetWindowSize;
