/**
 * @file error.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Hooks
import useComponetsToken from "../../hooks/useComponetsToken";

// Vendors
import { css } from '@emotion/react';
var useStyle = function useStyle(prefixCls) {
  var _useComponetsToken = useComponetsToken(),
    ToastToken = _useComponetsToken.Toast;
  return /*#__PURE__*/css("&.", prefixCls, "-message-notice-error{.", prefixCls, "-message-notice-content{background:", ToastToken['toast-color-bg-error'], ";}}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNjIiwiZmlsZSI6ImVycm9yLnRzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAZmlsZSBlcnJvci50c1xuICogQGF1dGhvciBsaWFuZ3hpYW9qdW4obGlhbmd4aWFvanVuQGRlcmJ5c29mdC5uZXQpXG4gKi9cblxuLy8gSG9va3NcbmltcG9ydCB1c2VDb21wb25ldHNUb2tlbiBmcm9tICcuLi8uLi9ob29rcy91c2VDb21wb25ldHNUb2tlbic7XG5cbi8vIFZlbmRvcnNcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuY29uc3QgdXNlU3R5bGUgPSAocHJlZml4Q2xzOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCB7IFRvYXN0OiBUb2FzdFRva2VuIH0gPSB1c2VDb21wb25ldHNUb2tlbigpO1xuXG4gICAgcmV0dXJuIGNzc2BcbiAgICAgICAgJi4ke3ByZWZpeENsc30tbWVzc2FnZS1ub3RpY2UtZXJyb3Ige1xuICAgICAgICAgICAgLiR7cHJlZml4Q2xzfS1tZXNzYWdlLW5vdGljZS1jb250ZW50IHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAke1RvYXN0VG9rZW5bJ3RvYXN0LWNvbG9yLWJnLWVycm9yJ119O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgYDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVN0eWxlO1xuIl19 */"));
};
export default useStyle;