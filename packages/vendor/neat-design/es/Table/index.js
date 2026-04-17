/**
 * @file index.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 * @author minglong.zhao(minglong.zhao@derbysoft.net)
 */

// Components
import { Table as AntTable } from 'antd';
import InternalTable from "./Table";
import InternalTableAvatar from "./TableAvatar";
import TableAvatarGroup from "./TableAvatarGroup";
import TableBadge from "./TableBadge";
import TableButton from "./TableButton";
import InternalTableDatePicker from "./TableDatePicker";
import TableInput from "./TableInput";
import TableInputNumber from "./TableInputNumber";
import TableMonthPicker from "./TableMonthPicker";
import TableQuarterPicker from "./TableQuarterPicker";
import TableRangePicker from "./TableRangePicker";
import TableSelect from "./TableSelect";
import TableSwitch from "./TableSwitch";
import TableTag from "./TableTag";
import TableTimePicker from "./TableTimePicker";
import TableYearPicker from "./TableYearPicker";

/**
 * Avatar
 */

var TableAvatar = InternalTableAvatar;
TableAvatar.Group = TableAvatarGroup;

/**
 * DatePicker
 */

var TableDatePicker = InternalTableDatePicker;
TableDatePicker.MonthPicker = TableMonthPicker;
TableDatePicker.TimePicker = TableTimePicker;
TableDatePicker.YearPicker = TableYearPicker;
TableDatePicker.QuarterPicker = TableQuarterPicker;
TableDatePicker.RangePicker = TableRangePicker;

/**
 * Table
 */

var Table = InternalTable;
Table.SELECTION_COLUMN = AntTable.SELECTION_COLUMN;
Table.EXPAND_COLUMN = AntTable.EXPAND_COLUMN;
Table.SELECTION_ALL = AntTable.SELECTION_ALL;
Table.SELECTION_INVERT = AntTable.SELECTION_INVERT;
Table.SELECTION_NONE = AntTable.SELECTION_NONE;
Table.Column = AntTable.Column;
Table.ColumnGroup = AntTable.ColumnGroup;
Table.Summary = AntTable.Summary;
Table.Button = TableButton;
Table.Tag = TableTag;
Table.Badge = TableBadge;
Table.Input = TableInput;
Table.InputNumber = TableInputNumber;
Table.Select = TableSelect;
Table.Avatar = TableAvatar;
Table.Switch = TableSwitch;
Table.DatePicker = TableDatePicker;
export { default as EmptyText } from "./EmptyText";
export default Table;