/**
 * @file useSize.ts
 * @author minglong.zhao(minglong.zhao@derbysoft.com)
 */
import type { SizeInfo } from 'rc-resize-observer';
declare const useSize: () => readonly [SizeInfo, import("lodash").DebouncedFunc<(size: SizeInfo) => void>];
export default useSize;
