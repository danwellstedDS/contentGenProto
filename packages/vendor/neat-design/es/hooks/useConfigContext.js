/**
 * @file useConfigContext.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Hooks
import { useContext } from 'react';

// Context
import NeatConfigContext from "../ConfigProvider/NeatConfigContext";

// Types

/**
 * Use ConfigProvider.ConfigContext
 */
export default (function () {
  return useContext(NeatConfigContext);
});