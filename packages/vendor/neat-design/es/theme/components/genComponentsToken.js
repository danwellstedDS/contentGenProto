/**
 * @file genComponentsToken.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Vendors
import { genToken as genAlertToken } from "../../Alert/token";
import { genToken as genAvatarToken } from "../../Avatar/token";
import { genToken as genBadgeToken } from "../../Badge/token";
import { genToken as genBreadcrumbToken } from "../../Breadcrumb/token";
import { genToken as genButtonToken } from "../../Button/token";
import { genToken as genCheckboxToken } from "../../Checkbox/token";
import { genToken as genCollapseToken } from "../../Collapse/token";
import { genToken as genDatePickerToken } from "../../DatePicker/token";
import { genToken as genDividerToken } from "../../Divider/token";
import { genToken as genDrawerToken } from "../../Drawer/token";
import { genToken as genDropdownToken } from "../../Dropdown/token";
import { genToken as genFormToken } from "../../Form/token";
import { genToken as genInputToken } from "../../Input/token";
import { genToken as genInputNumberToken } from "../../InputNumber/token";
import { genToken as genMenuToken } from "../../Menu/token";
import { genToken as genModalToken } from "../../Modal/token";
import { genToken as genNotificationToken } from "../../Notification/token";
import { genToken as genPaginationToken } from "../../Pagination/token";
import { genToken as genPopoverToken } from "../../Popover/token";
import { genToken as genProgressToken } from "../../Progress/token";
import { genToken as genRadioToken } from "../../Radio/token";
import { genToken as genRateToken } from "../../Rate/token";
import { genToken as genSegmentedToken } from "../../Segmented/token";
import { genToken as genSelectToken } from "../../Select/token";
import { genToken as genSkeletonToken } from "../../Skeleton/token";
import { genToken as genSpinnerToken } from "../../Spinner/token";
import { genToken as genStepsToken } from "../../Steps/token";
import { genToken as genSwitchToken } from "../../Switch/token";
import { genToken as genTableToken } from "../../Table/token";
import { genToken as genTabsToken } from "../../Tabs/token";
import { genToken as genTagToken } from "../../Tag/token";
import { genToken as genTimePickerToken } from "../../TimePicker/token";
import { genToken as genToastToken } from "../../Toast/token";
import { genToken as genTooltipToken } from "../../Tooltip/token";
import { genToken as genTreeToken } from "../../Tree/token";

// Types

export function genComponentsToken(token) {
  return {
    Alert: genAlertToken(token),
    Avatar: genAvatarToken(token),
    Badge: genBadgeToken(token),
    Breadcrumb: genBreadcrumbToken(token),
    Button: genButtonToken(token),
    Checkbox: genCheckboxToken(token),
    Collapse: genCollapseToken(token),
    DatePicker: genDatePickerToken(token),
    Divider: genDividerToken(token),
    Drawer: genDrawerToken(token),
    Dropdown: genDropdownToken(token),
    Form: genFormToken(token),
    Input: genInputToken(token),
    InputNumber: genInputNumberToken(token),
    Menu: genMenuToken(token),
    Modal: genModalToken(token),
    Notification: genNotificationToken(token),
    Pagination: genPaginationToken(token),
    Popover: genPopoverToken(token),
    Progress: genProgressToken(token),
    Radio: genRadioToken(token),
    Rate: genRateToken(token),
    Segmented: genSegmentedToken(token),
    Select: genSelectToken(token),
    Skeleton: genSkeletonToken(token),
    Spinner: genSpinnerToken(token),
    Steps: genStepsToken(token),
    Switch: genSwitchToken(token),
    Table: genTableToken(token),
    Tabs: genTabsToken(token),
    Tag: genTagToken(token),
    TimePicker: genTimePickerToken(token),
    Toast: genToastToken(token),
    Tooltip: genTooltipToken(token),
    Tree: genTreeToken(token)
  };
}