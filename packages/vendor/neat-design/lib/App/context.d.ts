/**
 * @file context.ts
 * @author peter(peter.rao@derbysoft.net)
 */
/// <reference types="react" />
import type { NotificationConfig, NotificationInstance } from 'antd/lib/notification/interface';
import type { HookAPI as ModalHookAPI } from '../Modal/types';
import type { ToastConfigOptions, ToastInstance } from '../Toast';
export type AppConfig = {
    /**
     * @deprecated please use "toast" instead
     */
    message?: ToastConfigOptions;
    toast?: ToastConfigOptions;
    notification?: NotificationConfig;
};
export declare const AppConfigContext: React.Context<AppConfig>;
export interface useAppProps {
    /**
     * @deprecated please use "toast" instead
     */
    message: ToastInstance;
    toast: ToastInstance;
    notification: NotificationInstance;
    modal: ModalHookAPI;
}
declare const AppContext: React.Context<useAppProps>;
export default AppContext;
