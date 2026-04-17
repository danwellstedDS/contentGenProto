/**
 * @file index.ts
 * @author pipi(peter.rao@derbysoft.net)
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import { Breadcrumb as AntBreadcrumb } from 'antd';
import InternalBreadcrumb from './Breadcrumb';
type InternalBreadcrumbType = typeof InternalBreadcrumb;
type CompoundedComponent = InternalBreadcrumbType & {
    Item: typeof AntBreadcrumb.Item;
    Separator: typeof AntBreadcrumb.Separator;
};
declare const Breadcrumb: CompoundedComponent;
export type { BreadcrumbItemProps, BreadcrumbProps } from './Breadcrumb';
export default Breadcrumb;
