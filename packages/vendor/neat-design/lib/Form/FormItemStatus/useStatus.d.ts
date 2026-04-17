/**
 * @file useStatus.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import { Form as AntForm } from 'antd';
export type StatusCallback = (status: ReturnType<typeof AntForm.Item.useStatus>) => void;
export interface UseStatusProps {
    onStatusChange?: StatusCallback;
}
declare function useStatus({ onStatusChange }: UseStatusProps): void;
export default useStatus;
