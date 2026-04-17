/**
 * @file ThemeConfig.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import type { Token } from '@derbysoft/neat-design-token';
import type ComponentTokenMap from './ComponentTokenMap';
import type SubComponentTokenMap from './SubComponentTokenMap';
export default interface ThemeConfig {
    token: Token;
    components: ComponentTokenMap;
    subComponents: SubComponentTokenMap;
}
