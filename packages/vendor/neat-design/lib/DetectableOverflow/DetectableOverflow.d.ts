/**
 * @file DetectableOverflow.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import type { CSSProperties, FC, ReactNode } from 'react';
import type { Props as ReactDetectableOverflowProps } from 'react-detectable-overflow/dist/DetectableOverflow';
export interface DetectableOverflowProps extends Omit<ReactDetectableOverflowProps, 'children'> {
    children: (overflow: boolean) => ReactNode;
    style?: CSSProperties;
}
declare const DetectableOverflow: FC<DetectableOverflowProps>;
export default DetectableOverflow;
