import _ArrowRightOutlined from "@derbysoft/neat-design-icons/lib/icons-react/ArrowRightOutlined";
import _ArrowLeftOutlined from "@derbysoft/neat-design-icons/lib/icons-react/ArrowLeftOutlined";
import _CalendarOutlined from "@derbysoft/neat-design-icons/lib/icons-react/CalendarOutlined";
/**
 * @file useIcons.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Icons
// Types
import { jsx as _jsx } from "@emotion/react/jsx-runtime";
var useIcons = function useIcons(_ref) {
  var suffixIcon = _ref.suffixIcon,
    prevIcon = _ref.prevIcon,
    nextIcon = _ref.nextIcon,
    superPrevIcon = _ref.superPrevIcon,
    superNextIcon = _ref.superNextIcon;
  return {
    suffixIcon: suffixIcon || _jsx(_CalendarOutlined, {}),
    prevIcon: prevIcon || _jsx(_ArrowLeftOutlined, {}),
    nextIcon: nextIcon || _jsx(_ArrowRightOutlined, {}),
    superPrevIcon: superPrevIcon || _jsx(_ArrowLeftOutlined, {}),
    superNextIcon: superNextIcon || _jsx(_ArrowRightOutlined, {})
  };
};
export default useIcons;