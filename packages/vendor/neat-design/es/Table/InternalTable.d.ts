/**
 * @file InternalTable.tsx
 * @author minglong.zhao(minglong.zhao@derbysoft.com)
 */
import type { TableProps as AntTableProps } from 'antd/lib/table/InternalTable';
import type { PropsWithoutRef, ReactNode, RefAttributes } from 'react';
import type { AnyObject } from '../@types/types';
import type { Reference } from './types';
declare const _default: <RecordType extends AnyObject>(props: PropsWithoutRef<AntTableProps<RecordType>> & RefAttributes<Reference>) => ReactNode;
export default _default;
