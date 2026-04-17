/**
 * @file useShowSelectAll.ts
 * @author minglong.zhao(minglong.zhao@derbysoft.net)
 */
declare const useShowSelectAll: (selectedRowKeys?: string[]) => {
    showSelectAll: boolean;
    handleSelectAllChange: () => void;
};
export default useShowSelectAll;
