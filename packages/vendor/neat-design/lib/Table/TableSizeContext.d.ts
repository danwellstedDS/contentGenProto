/**
 * @file TableSizeContext.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
/// <reference types="react" />
import type { TableProps } from '../Table';
interface Context {
    size?: TableProps['size'];
}
declare const TableSizeContext: React.Context<Context>;
export default TableSizeContext;
