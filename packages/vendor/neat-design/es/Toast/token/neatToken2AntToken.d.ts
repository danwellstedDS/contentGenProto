/**
 * @file neatToken2AntToken.ts
 * @author liangxiaojun
 */
import type { ThemeConfig as AntThemeConfig } from 'antd';
import type { ThemeConfig } from '../../theme';
export default function neatToken2AntToken(theme: ThemeConfig): AntThemeConfig['components']['Message'];
