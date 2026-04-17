/**
 * @file DraggableComponent.tsx
 * @author minglong.zhao(minglong.zhao@derbysoft.com)
 */
import type { SizeInfo } from 'rc-resize-observer';
import type { FC } from 'react';
import type { DraggableBoundSource, SnackBarProps } from './types';
type Props = {
    boundSize: SizeInfo;
    draggableBoundSource?: DraggableBoundSource;
} & SnackBarProps;
declare const DraggableComponent: FC<Props>;
export default DraggableComponent;
