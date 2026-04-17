/**
 * @file NeatConfigProvider.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import type { FC, ReactNode } from 'react';
import type { ThemeConfig } from '../theme';
import type { LocaleFontMapping } from './types';
export interface NeatConfigProviderProps {
    children?: ReactNode;
    theme?: ThemeConfig;
    localeFontMapping?: LocaleFontMapping;
}
declare const NeatConfigProvider: FC<NeatConfigProviderProps>;
export default NeatConfigProvider;
