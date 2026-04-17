/**
 * @file types.ts
 * @author minglong.zhao(minglong.zhao@derbysoft.com)
 */
import type { SizeInfo } from 'rc-resize-observer';
import type { ReactNode } from 'react';
import type { ControlPosition, PositionOffsetControlPosition } from 'react-draggable';
export type Placement = 'top' | 'left' | 'right' | 'bottom' | {
    x: number;
    y: number;
};
export type BoundsGap = number | [number, number, number, number];
export type DraggableBoundSource = 'container' | 'children' | 'window';
export type SnackBarProps = {
    /** add zIndex to dom */
    zIndex?: number;
    /** add className to bar */
    className?: string;
    /** set bar width */
    width?: number | string;
    /** Distance from border
     * type number : 8
     * type arr : [top,right,bottom,left]
     */
    boundsGap?: BoundsGap;
    positionOffset?: PositionOffsetControlPosition;
    /** placement */
    placement?: Placement;
    /** bar content */
    content?: ReactNode;
    /** whether can darg the bar */
    isDraggable?: boolean;
    /** show draggable bar */
    open?: boolean;
    /** control whether the bar is displayed */
    onOpenChange?: (open: boolean) => void;
    onDragStart?: (position: ControlPosition) => void;
    onDragging?: (position: ControlPosition) => void;
    onDragStop?: (position: ControlPosition) => void;
    onBarSizeChange?: (size: SizeInfo) => void;
    getContainer?: () => HTMLElement;
};
