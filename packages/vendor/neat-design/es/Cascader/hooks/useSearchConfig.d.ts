/**
 * @file useSearchConfig.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import type { ShowSearchType } from 'rc-cascader/lib/Cascader';
import type { CascaderProps } from '../Cascader';
declare const useSearchConfig: (showSearch?: CascaderProps['showSearch']) => [boolean, ShowSearchType];
export default useSearchConfig;
