/**
 * @file ExpandIcon.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 * @author minglong.zhao(minglong.zhao@derbysoft.net)
 */
import type { MouseEvent } from 'react';
interface DefaultExpandIconProps<RecordType> {
    prefixCls: string;
    onExpand: (record: RecordType, e: MouseEvent<HTMLElement>) => void;
    record: RecordType;
    expanded: boolean;
    expandable: boolean;
}
declare function expandIcon<RecordType>({ prefixCls, onExpand, record, expanded, expandable, }: DefaultExpandIconProps<RecordType>): import("@emotion/react/jsx-runtime").JSX.Element;
export default expandIcon;
