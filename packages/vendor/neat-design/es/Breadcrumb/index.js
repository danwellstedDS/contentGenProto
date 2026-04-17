/**
 * @file index.ts
 * @author pipi(peter.rao@derbysoft.net)
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Components
import { Breadcrumb as AntBreadcrumb } from 'antd';
import InternalBreadcrumb from "./Breadcrumb";
var Breadcrumb = InternalBreadcrumb;
Breadcrumb.Item = AntBreadcrumb.Item;
Breadcrumb.Separator = AntBreadcrumb.Separator;
export default Breadcrumb;