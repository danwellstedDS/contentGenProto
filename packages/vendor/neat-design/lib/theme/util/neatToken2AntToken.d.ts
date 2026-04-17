/**
 * @file neatToken2AntToken.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import type { Token } from '@derbysoft/neat-design-token';
import type { ThemeConfig as AntThemeConfig } from 'antd';
export default function neatToken2AntToken(token: Token): AntThemeConfig['token'];
