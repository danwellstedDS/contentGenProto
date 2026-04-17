import _ArrowRightOutlined from "@derbysoft/neat-design-icons/lib/icons-react/ArrowRightOutlined";
/**
 * @file getExpandIcon.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Icons
// Vendors
import classNames from 'classnames';

// Types
import { jsx as _jsx } from "@emotion/react/jsx-runtime";
var getExpandIcon = function getExpandIcon() {
  return function (_ref) {
    var isActive = _ref.isActive;
    return _jsx("i", {
      className: classNames({
        activated: isActive
      }),
      "aria-expanded": isActive,
      children: _jsx(_ArrowRightOutlined, {})
    });
  };
};
export default getExpandIcon;