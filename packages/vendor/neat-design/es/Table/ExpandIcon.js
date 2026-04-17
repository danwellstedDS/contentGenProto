import _ArrowRightOutlined from "@derbysoft/neat-design-icons/lib/icons-react/ArrowRightOutlined";
/**
 * @file ExpandIcon.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 * @author minglong.zhao(minglong.zhao@derbysoft.net)
 */
// Icons
// Vendors
import classNames from 'classnames';

// Types
import { jsx as _jsx } from "@emotion/react/jsx-runtime";
function expandIcon(_ref) {
  var prefixCls = _ref.prefixCls,
    onExpand = _ref.onExpand,
    record = _ref.record,
    expanded = _ref.expanded,
    expandable = _ref.expandable;
  return expandable && _jsx("i", {
    className: classNames("".concat(prefixCls, "-expend-icon"), {
      expandable: expandable,
      expanded: expanded
    }),
    "aria-expanded": expanded,
    onClick: function onClick(e) {
      onExpand(record, e);
      e.stopPropagation();
    },
    children: _jsx(_ArrowRightOutlined, {})
  });
}
export default expandIcon;