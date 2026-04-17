/**
 * @file context.ts
 * @author peter(peter.rao@derbysoft.net)
 */

// Vendors
import { createContext } from 'react';

// Types

export var AppConfigContext = /*#__PURE__*/createContext({});
var AppContext = /*#__PURE__*/createContext({
  /**
   * @deprecated please use "toast" instead
   */
  message: {},
  toast: {},
  notification: {},
  modal: {}
});
export default AppContext;