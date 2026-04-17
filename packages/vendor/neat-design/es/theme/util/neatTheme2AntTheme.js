/**
 * @file neatTheme2AntTheme.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Vendors
import { neatToken2AntToken as neatAlertToken2AntAlertToken } from "../../Alert/token";
import { neatToken2AntToken as neatAvatarToken2AntAvatarToken } from "../../Avatar/token";
import { neatToken2AntToken as neatBadgeToken2AntBadgeToken } from "../../Badge/token";
import { neatToken2AntToken as neatBreadcrumbToken2AntBreadcrumbToken } from "../../Breadcrumb/token";
import { neatToken2AntToken as neatButtonToken2AntButtonToken } from "../../Button/token";
import { neatToken2AntToken as neatCheckboxToken2AntTooltipToken } from "../../Checkbox/token";
import { neatToken2AntToken as neatCollapseToken2AntCollapseToken } from "../../Collapse/token";
import { neatToken2AntToken as neatDatePickerToken2AntDatePickerToken } from "../../DatePicker/token";
import { neatToken2AntToken as neatDividerToken2AntDividerToken } from "../../Divider/token";
import { neatToken2AntToken as neatDrawerToken2AntDrawerToken } from "../../Drawer/token";
import { neatToken2AntToken as neatDropdownToken2AntDropdownToken } from "../../Dropdown/token";
import { neatToken2AntToken as neatFormToken2AntFormToken } from "../../Form/token";
import { neatToken2AntToken as neatInputToken2AntInputToken } from "../../Input/token";
import { neatToken2AntToken as neatInputNumberToken2AntInputNumberToken } from "../../InputNumber/token";
import { neatToken2AntToken as neatLayoutToken2AntLayoutToken } from "../../Layout/token";
import { neatToken2AntToken as neatMenuToken2AntMenuToken } from "../../Menu/token";
import { neatToken2AntToken as neatModalToken2AntModalToken } from "../../Modal/token";
import { neatToken2AntToken as neatNotification2AntNotificationToken } from "../../Notification/token";
import { neatToken2AntToken as neatPaginationToken2AntPaginationToken } from "../../Pagination/token";
import { neatToken2AntToken as neatPopoverToken2AntPopoverToken } from "../../Popover/token";
import { neatToken2AntToken as neatProgressToken2AntProgressToken } from "../../Progress/token";
import { neatToken2AntToken as neatRadioToken2AntRadioToken } from "../../Radio/token";
import { neatToken2AntToken as neatRateToken2AntRateToken } from "../../Rate/token";
import { neatToken2AntToken as neatSegmentedToken2AntSelectToken } from "../../Segmented/token";
import { neatToken2AntToken as neatSelectToken2AntSelectToken } from "../../Select/token";
import { neatToken2AntToken as neatSkeletonToken2AntSkeletonToken } from "../../Skeleton/token";
import { neatToken2AntToken as neatSpinnerToken2AntSpinToken } from "../../Spinner/token";
import { neatToken2AntToken as neatStepsToken2AntStepsToken } from "../../Steps/token";
import { neatToken2AntToken as neatSwitchToken2AntSwitchToken } from "../../Switch/token";
import { neatToken2AntToken as neatTableToken2AntTableToken } from "../../Table/token";
import { neatToken2AntToken as neatTabsToken2AntTabsToken } from "../../Tabs/token";
import { neatToken2AntToken as neatTagToken2AntTagToken } from "../../Tag/token";
import { neatToken2AntToken as neatToastToken2AntToastToken } from "../../Toast/token";
import { neatToken2AntToken as neatTooltipToken2AntTooltipToken } from "../../Tooltip/token";
import { neatToken2AntToken as neatTreeToken2AntTreeToken } from "../../Tree/token";
import neatToken2AntToken from "./neatToken2AntToken";

// Types

export default function neatTheme2AntTheme(theme) {
  return {
    token: neatToken2AntToken(theme.token),
    components: {
      Alert: neatAlertToken2AntAlertToken(theme),
      Avatar: neatAvatarToken2AntAvatarToken(theme),
      Badge: neatBadgeToken2AntBadgeToken(theme),
      Breadcrumb: neatBreadcrumbToken2AntBreadcrumbToken(theme),
      Button: neatButtonToken2AntButtonToken(theme),
      Checkbox: neatCheckboxToken2AntTooltipToken(),
      Collapse: neatCollapseToken2AntCollapseToken(theme),
      DatePicker: neatDatePickerToken2AntDatePickerToken(theme),
      Divider: neatDividerToken2AntDividerToken(),
      Drawer: neatDrawerToken2AntDrawerToken(),
      Dropdown: neatDropdownToken2AntDropdownToken(theme),
      Form: neatFormToken2AntFormToken(theme),
      Input: neatInputToken2AntInputToken(theme),
      InputNumber: neatInputNumberToken2AntInputNumberToken(theme),
      Menu: neatMenuToken2AntMenuToken(theme),
      Modal: neatModalToken2AntModalToken(theme),
      Layout: neatLayoutToken2AntLayoutToken(theme),
      Message: neatToastToken2AntToastToken(theme),
      Notification: neatNotification2AntNotificationToken(),
      Pagination: neatPaginationToken2AntPaginationToken(theme),
      Popover: neatPopoverToken2AntPopoverToken(theme),
      Progress: neatProgressToken2AntProgressToken(theme),
      Radio: neatRadioToken2AntRadioToken(theme),
      Rate: neatRateToken2AntRateToken(theme),
      Segmented: neatSegmentedToken2AntSelectToken(theme),
      Select: neatSelectToken2AntSelectToken(theme),
      Skeleton: neatSkeletonToken2AntSkeletonToken(),
      Spin: neatSpinnerToken2AntSpinToken(theme),
      Steps: neatStepsToken2AntStepsToken(theme),
      Switch: neatSwitchToken2AntSwitchToken(theme),
      Table: neatTableToken2AntTableToken(theme),
      Tabs: neatTabsToken2AntTabsToken(theme),
      Tag: neatTagToken2AntTagToken(theme),
      Tooltip: neatTooltipToken2AntTooltipToken(theme),
      Tree: neatTreeToken2AntTreeToken(theme)
    }
  };
}