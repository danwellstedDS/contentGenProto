/**
 * @file Bar.tsx
 * @author minglong.zhao(minglong.zhao@derbysoft.com)
 */
import type { SizeInfo } from 'rc-resize-observer';
import type { CSSProperties } from 'react';
import type { DraggableBoundSource, SnackBarProps } from './types';
declare const _default: React.ForwardRefExoticComponent<{
    init: boolean;
    barMaxWidth: number;
    dragging: boolean;
    draggableBoundSource: DraggableBoundSource;
    updateBarSize: (size: SizeInfo) => void;
    style?: CSSProperties;
} & Pick<SnackBarProps, "className" | "zIndex" | "content" | "open" | "width" | "isDraggable"> & React.RefAttributes<HTMLDivElement>>;
export default _default;
