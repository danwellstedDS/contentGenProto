import type { CSSProperties, FC, ReactNode } from 'react';
import type { AnyObject, CustomComponent } from '../@types/types';
import type { AppConfig, useAppProps } from './context';
export interface AppProps<P = AnyObject> extends AppConfig {
    style?: CSSProperties;
    className?: string;
    rootClassName?: string;
    prefixCls?: string;
    children?: ReactNode;
    component?: CustomComponent<P> | false;
}
declare const useApp: () => useAppProps;
declare const App: FC<AppProps> & {
    useApp: typeof useApp;
};
export default App;
