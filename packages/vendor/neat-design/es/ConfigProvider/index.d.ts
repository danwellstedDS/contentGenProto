/**
 * @file index.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import { ConfigProvider as AntConfigProvider } from 'antd';
import InternalConfigProvider from './ConfigProvider';
import NeatConfigContext from './NeatConfigContext';
import useConfig from './useConfig';
type InternalConfigProviderType = typeof InternalConfigProvider;
type CompoundedComponent = InternalConfigProviderType & {
    ConfigContext: typeof NeatConfigContext;
    config: typeof AntConfigProvider.config;
    useConfig: typeof useConfig;
};
declare const ConfigProvider: CompoundedComponent;
export type * from './types';
export default ConfigProvider;
