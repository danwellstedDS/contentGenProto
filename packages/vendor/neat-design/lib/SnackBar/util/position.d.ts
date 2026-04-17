/**
 * @file position.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import type { SizeInfo } from 'rc-resize-observer';
import type { DraggableBounds } from 'react-draggable';
import type { SnackBarProps } from '../types';
export declare const formatBoundsGap: (boundsGap: SnackBarProps['boundsGap']) => number[];
export declare const getBounds: (boundSize: SizeInfo, barSize: SizeInfo, boundsGap: SnackBarProps['boundsGap']) => Required<DraggableBounds>;
export declare const getValidPosition: (object: {
    x: number;
    y: number;
}, bounds: Required<DraggableBounds>) => {
    x: number;
    y: number;
};
export declare const transferOriginPlacement: (placement: SnackBarProps['placement'], bounds: Required<DraggableBounds>) => {
    x: number;
    y: number;
};
export declare const checkNeedPackUp: (x: number, bounds: Required<DraggableBounds>) => false | "left" | "right";
