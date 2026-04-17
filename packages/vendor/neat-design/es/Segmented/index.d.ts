/**
 * @file index.ts
 * @author minglong.zhao(minglong.zhao@derbysoft.net)
 */
import InternalSegmented from './Segmented';
import type { FC, RefAttributes } from 'react';
import type { SegmentedProps } from './Segmented';
declare const Segmented: (<ValueType>(props: SegmentedProps<ValueType> & RefAttributes<HTMLDivElement>) => ReturnType<typeof InternalSegmented>) & Pick<FC, "displayName">;
export type { SegmentedProps, SegmentedValue } from './Segmented';
export default Segmented;
