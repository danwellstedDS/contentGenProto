/**
 * @file GetDragBounds.tsx
 * @author minglong.zhao(minglong.zhao@derbysoft.com)
 */
import type { SizeInfo } from 'rc-resize-observer';
import type { FC, PropsWithChildren } from 'react';
import type { DraggableBoundSource, SnackBarProps } from './types';
type Props = {
    draggableBoundSource?: DraggableBoundSource;
    onResize: (size: SizeInfo) => void;
} & Pick<SnackBarProps, 'getContainer'>;
declare const GetDragBounds: FC<PropsWithChildren<Props>>;
export default GetDragBounds;
