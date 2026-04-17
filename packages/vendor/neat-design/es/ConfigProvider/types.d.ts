/**
 * @file types.ts
 * @author minglong.zhao(minglong.zhao@derbysoft.net)
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import type { SerializedStyles } from '@emotion/serialize';
import type { ConfigProviderProps as AntdConfigProviderProps, ThemeConfig as AntThemeConfig } from 'antd';
import type { ConfigConsumerProps } from 'antd/lib/config-provider';
import type { Locale as AntdLocale } from 'antd/lib/locale';
import type { ModalLocale as AntdModalLocale } from 'antd/lib/modal/locale';
import type { PaginationLocale as AntdPaginationLocale } from 'antd/lib/pagination/Pagination';
import type { TableLocale as AntdTableLocale } from 'antd/lib/table/interface';
import type { RecursivePartial } from '../@types/types';
import type { ThemeConfig } from '../theme';
export type ActionLocale = Omit<AntdModalLocale, 'justOkText'> & {};
export type DrawerLocale = Omit<AntdModalLocale, 'justOkText'> & {};
export type PaginationLocale = AntdPaginationLocale & {
    showTotal?: (total: number, start: number, end: number) => string;
};
export type TableLocale = AntdTableLocale & {
    emptyTextTitle?: string;
    emptyTextDescription?: string;
    selectPopupTotalNumber?: (number: number) => string;
    selectPopupAcrossTotalNumber?: (number: number) => string;
    selectPopupSelectAll?: (number: number) => string;
    selectPopupUnselectAll?: string;
    selectPopupClearAll?: string;
};
export type Locale = Omit<AntdLocale, 'Pagination' | 'Table'> & {
    Action?: ActionLocale;
    Drawer?: DrawerLocale;
    Pagination?: PaginationLocale;
    Table?: TableLocale;
};
export type ConfigProviderSizeType = 'medium' | 'small' | 'large';
export interface LocaleFontConfig {
    fontFamily?: string;
    styles?: SerializedStyles;
}
export type LocaleFontMapping = Record<Locale['locale'], LocaleFontConfig>;
export type ConfigProviderProps = Omit<AntdConfigProviderProps, 'theme' | 'componentSize' | 'locale'> & {
    theme?: RecursivePartial<ThemeConfig>;
    componentSize?: ConfigProviderSizeType;
    locale?: Locale;
    localeFontMapping?: LocaleFontMapping;
};
export interface ConfigContextProps extends Omit<ConfigConsumerProps, 'theme' | 'locale'> {
    antTheme?: AntThemeConfig;
    theme?: ThemeConfig;
    locale?: Locale;
    localeFontMapping?: LocaleFontMapping;
}
