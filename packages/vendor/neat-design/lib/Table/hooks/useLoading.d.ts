/**
 * @file useLoading.tsx
 * @author minglong.zhao(minglong.zhao@derbysoft.net)
 */
import type { SpinProps as AntSpinProps } from 'antd';
import type { TableProps } from '../types';
interface Loading {
    loading: TableProps['loading'];
}
declare const useLoading: ({ loading }: Loading) => {
    loadingConfig: AntSpinProps;
};
export default useLoading;
