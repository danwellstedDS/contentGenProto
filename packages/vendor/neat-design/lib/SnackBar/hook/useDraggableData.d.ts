/**
 * @file useDraggableData.ts
 * @author minglong.zhao(minglong.zhao@derbysoft.com)
 */
import type { SizeInfo } from 'rc-resize-observer';
import type { ControlPosition, DraggableBounds, DraggableData, DraggableEvent } from 'react-draggable';
import type { SnackBarProps } from '../types';
type Props = {
    boundSize: SizeInfo;
    barSize: SizeInfo;
} & Pick<SnackBarProps, 'placement' | 'boundsGap' | 'onDragStart' | 'onDragging' | 'onDragStop'>;
declare const useDraggableData: ({ boundSize, barSize, placement, boundsGap, onDragStart, onDragging, onDragStop, }: Props) => {
    init: boolean;
    bounds: Required<DraggableBounds>;
    position: ControlPosition;
    dragging: boolean;
    handleListenDragStart: (_e: DraggableEvent, data: DraggableData) => void;
    handleListenDragging: (_e: DraggableEvent, data: DraggableData) => void;
    handleListenDragStop: (_e: DraggableEvent, data: DraggableData) => void;
};
export default useDraggableData;
