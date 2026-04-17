/**
 * @file warning.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Hooks
import useComponetsToken from "../../hooks/useComponetsToken";

// Vendors
import { css } from '@emotion/react';
var useStyle = function useStyle(prefixCls) {
  var _useComponetsToken = useComponetsToken(),
    ToastToken = _useComponetsToken.Toast;
  return /*#__PURE__*/css("&.", prefixCls, "-message-notice-warning{.", prefixCls, "-message-notice-content{background:", ToastToken['toast-color-bg-warning'], ";}}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhcm5pbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY2MiLCJmaWxlIjoid2FybmluZy50cyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGUgd2FybmluZy50c1xuICogQGF1dGhvciBsaWFuZ3hpYW9qdW4obGlhbmd4aWFvanVuQGRlcmJ5c29mdC5uZXQpXG4gKi9cblxuLy8gSG9va3NcbmltcG9ydCB1c2VDb21wb25ldHNUb2tlbiBmcm9tICcuLi8uLi9ob29rcy91c2VDb21wb25ldHNUb2tlbic7XG5cbi8vIFZlbmRvcnNcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuY29uc3QgdXNlU3R5bGUgPSAocHJlZml4Q2xzOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCB7IFRvYXN0OiBUb2FzdFRva2VuIH0gPSB1c2VDb21wb25ldHNUb2tlbigpO1xuXG4gICAgcmV0dXJuIGNzc2BcbiAgICAgICAgJi4ke3ByZWZpeENsc30tbWVzc2FnZS1ub3RpY2Utd2FybmluZyB7XG4gICAgICAgICAgICAuJHtwcmVmaXhDbHN9LW1lc3NhZ2Utbm90aWNlLWNvbnRlbnQge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7VG9hc3RUb2tlblsndG9hc3QtY29sb3ItYmctd2FybmluZyddfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIGA7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VTdHlsZTtcbiJdfQ== */"));
};
export default useStyle;