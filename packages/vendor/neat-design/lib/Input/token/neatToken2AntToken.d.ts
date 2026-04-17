/**
 * @file neatToken2AntToken.ts
 * @author rzh(peter.rao@derbysoft.net)
 * @author minglong.zhao(minglong.zhao@derbysoft.net)
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import type { ThemeConfig as AntThemeConfig } from 'antd';
import type { ThemeConfig } from '../../theme';
export default function neatToken2AntToken(theme: ThemeConfig): AntThemeConfig['components']['Input'];
