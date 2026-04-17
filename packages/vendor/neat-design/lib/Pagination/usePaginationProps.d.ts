/**
 * @file usePaginationProps.tsx
 * @author minglong.zhao(minglong.zhao@derbysoft.net)
 */
import type { PaginationProps as AntPaginationProps } from 'antd';
import type { PaginationProps } from './index';
declare const usePaginationProps: () => {
    DEFAULT_PROPS: {
        showQuickJumper: boolean;
        prevIcon: import("@emotion/react/jsx-runtime").JSX.Element;
        nextIcon: import("@emotion/react/jsx-runtime").JSX.Element;
    };
    mergeProps: (props: PaginationProps) => Partial<AntPaginationProps>;
};
export default usePaginationProps;
