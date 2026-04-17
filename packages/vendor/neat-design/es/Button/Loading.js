/**
 * @file Button.tsx
 * @author minglong.zhao(minglong.zhao@derbysoft.net)
 */

// Vendors

// Components
import { InternalLoading } from "../Spinner";

// Hooks
import { useToken } from "../hooks";

// Types
import { jsx as _jsx } from "@emotion/react/jsx-runtime";
var Loading = function Loading(_ref) {
  var type = _ref.type,
    disabled = _ref.disabled;
  var token = useToken();
  return _jsx(InternalLoading, {
    size: "1em",
    as: "div",
    color: type === 'primary' ? disabled ? token['color-icon'] : token['color-icon-inverse'] : token['color-icon'],
    circleThickness: 2
  });
};
export default Loading;