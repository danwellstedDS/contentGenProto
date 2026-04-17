/**
 * @file useSelectedControlled.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import type { SelectEventHandler } from 'rc-menu/lib/interface';
export interface UseControlProps {
    selectedKeys?: string[];
    defaultSelectedKeys?: string[];
    onSelect?: SelectEventHandler;
    onDeselect?: SelectEventHandler;
    [key: string]: any;
}
declare const useSelectedControlled: (props: UseControlProps) => {
    selectedKeys: string[];
    onSelect: SelectEventHandler;
    onDeselect: SelectEventHandler;
};
export default useSelectedControlled;
