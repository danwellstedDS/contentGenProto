/**
 * @file index.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

import { ConfigProvider as AntConfigProvider } from 'antd';
import InternalConfigProvider from "./ConfigProvider";
import NeatConfigContext from "./NeatConfigContext";
import useConfig from "./useConfig";
var ConfigProvider = InternalConfigProvider;
ConfigProvider.ConfigContext = NeatConfigContext;
ConfigProvider.config = AntConfigProvider.config;
ConfigProvider.useConfig = useConfig;
export default ConfigProvider;