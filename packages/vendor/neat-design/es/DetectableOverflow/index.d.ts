/**
 * @file index.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import { useOverflowDetector } from 'react-detectable-overflow';
import InternalDetectableOverflow from './DetectableOverflow';
type InternalDetectableOverflowType = typeof InternalDetectableOverflow;
type CompoundedComponent = InternalDetectableOverflowType & {
    useOverflowDetector: typeof useOverflowDetector;
};
declare const DetectableOverflow: CompoundedComponent;
export type { DetectableOverflowProps } from './DetectableOverflow';
export default DetectableOverflow;
