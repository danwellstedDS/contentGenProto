/**
 * @file index.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Statics
import { PowerBlackToken } from '@derbysoft/neat-design-token';

// Vendors
import { genPowerBlackComponentsToken } from "./components/powerBlackComponentsToken";
import { genPowerBlackSubComponentsToken } from "./subComponents/powerBlackSubComponentsToken";

// Types

// Export Themes
export var PowerBlackTheme = {
  token: PowerBlackToken,
  components: genPowerBlackComponentsToken(PowerBlackToken),
  subComponents: genPowerBlackSubComponentsToken(PowerBlackToken)
};
export var defaultTheme = PowerBlackTheme;

// Export Vendors
export { genComponentsToken } from "./components/genComponentsToken";
export { genSubComponentsToken } from "./subComponents/genSubComponentsToken";
export { default as neatTheme2AntTheme } from "./util/neatTheme2AntTheme";

// Export Types