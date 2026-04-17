/**
 * @file index.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

import { useOverflowDetector } from 'react-detectable-overflow';
import InternalDetectableOverflow from "./DetectableOverflow";
var DetectableOverflow = InternalDetectableOverflow;
DetectableOverflow.useOverflowDetector = useOverflowDetector;
export default DetectableOverflow;