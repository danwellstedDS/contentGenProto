/**
 * @file useConfig.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import type { ConfigProviderSizeType } from '../ConfigProvider';
declare const useConfig: () => {
    componentSize: ConfigProviderSizeType;
    componentDisabled: boolean;
};
export default useConfig;
