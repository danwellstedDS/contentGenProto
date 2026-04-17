/**
 * @file useStatus.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Hooks
import { useEffect } from 'react';

// Components
import { Form as AntForm } from 'antd';
function useStatus(_ref) {
  var onStatusChange = _ref.onStatusChange;
  var status = AntForm.Item.useStatus();
  useEffect(function () {
    onStatusChange === null || onStatusChange === void 0 || onStatusChange(status);
  }, [status, onStatusChange]);
}
export default useStatus;