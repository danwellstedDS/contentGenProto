/**
 * @file index.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 * @author minglong.zhao(minglong.zhao@derbysoft.net)
 */
import { Table as AntTable } from 'antd';
import InternalTable from './Table';
import InternalTableAvatar from './TableAvatar';
import TableAvatarGroup from './TableAvatarGroup';
import TableBadge from './TableBadge';
import TableButton from './TableButton';
import InternalTableDatePicker from './TableDatePicker';
import TableInput from './TableInput';
import TableInputNumber from './TableInputNumber';
import TableMonthPicker from './TableMonthPicker';
import TableQuarterPicker from './TableQuarterPicker';
import TableRangePicker from './TableRangePicker';
import TableSelect from './TableSelect';
import TableSwitch from './TableSwitch';
import TableTag from './TableTag';
import TableTimePicker from './TableTimePicker';
import TableYearPicker from './TableYearPicker';
/**
 * Avatar
 */
type InternalTableAvatarType = typeof InternalTableAvatar;
type CompoundedTableAvatar = InternalTableAvatarType & {
    Group: typeof TableAvatarGroup;
};
declare const TableAvatar: CompoundedTableAvatar;
/**
 * DatePicker
 */
type InternalTableDatePickerType = typeof InternalTableDatePicker;
type CompoundedTableDatePicker = InternalTableDatePickerType & {
    MonthPicker: typeof TableMonthPicker;
    TimePicker: typeof TableTimePicker;
    YearPicker: typeof TableYearPicker;
    QuarterPicker: typeof TableQuarterPicker;
    RangePicker: typeof TableRangePicker;
};
declare const TableDatePicker: CompoundedTableDatePicker;
/**
 * Table
 */
type InternalTableType = typeof InternalTable;
type CompoundedComponent = InternalTableType & {
    SELECTION_COLUMN: typeof AntTable.SELECTION_COLUMN;
    EXPAND_COLUMN: typeof AntTable.EXPAND_COLUMN;
    SELECTION_ALL: typeof AntTable.SELECTION_ALL;
    SELECTION_INVERT: typeof AntTable.SELECTION_INVERT;
    SELECTION_NONE: typeof AntTable.SELECTION_NONE;
    Column: typeof AntTable.Column;
    ColumnGroup: typeof AntTable.ColumnGroup;
    Summary: typeof AntTable.Summary;
    Button: typeof TableButton;
    Tag: typeof TableTag;
    Badge: typeof TableBadge;
    Switch: typeof TableSwitch;
    Input: typeof TableInput;
    InputNumber: typeof TableInputNumber;
    Select: typeof TableSelect;
    Avatar: typeof TableAvatar;
    DatePicker: typeof TableDatePicker;
};
declare const Table: CompoundedComponent;
export { default as EmptyText } from './EmptyText';
export type { EmptyTextProps } from './EmptyText';
export type { TableProps } from './types';
export default Table;
