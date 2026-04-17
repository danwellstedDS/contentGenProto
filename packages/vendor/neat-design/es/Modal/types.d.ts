/**
 * @file types.ts
 * @author minglong.zhao(minglong.zhao@derbysoft.net)
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import type { ModalFuncProps as AntModalFuncProps, ModalProps as AntModalProps } from 'antd';
import type { ButtonProps } from '../Button';
export type ModalSize = 'small' | 'medium' | 'large';
export interface ModalProps extends Omit<AntModalProps, 'okType' | 'okButtonProps' | 'cancelButtonProps'> {
    fullScreen?: boolean;
    size?: ModalSize;
    responsive?: boolean;
    okType?: ButtonProps['type'];
    okButtonProps?: ButtonProps;
    cancelButtonProps?: ButtonProps;
}
export interface ModalConfirmFuncProps extends Omit<AntModalFuncProps, 'type' | 'okType' | 'okButtonProps' | 'cancelButtonProps'> {
    type?: 'info' | 'error';
    loading?: boolean;
    size?: ModalSize;
    okType?: ButtonProps['type'];
    okButtonProps?: ButtonProps;
    cancelButtonProps?: ButtonProps;
}
export interface ModalCommonFuncProps extends Omit<AntModalFuncProps, 'okType' | 'okButtonProps' | 'cancelButtonProps'> {
    loading?: boolean;
    size?: ModalSize;
    okType?: ButtonProps['type'];
    okButtonProps?: ButtonProps;
    cancelButtonProps?: ButtonProps;
}
export type ModalFuncProps = ModalConfirmFuncProps | ModalCommonFuncProps;
export type ConfigUpdate = ModalFuncProps | ((prevConfig: ModalFuncProps) => ModalFuncProps);
export type ModalConfirmFunc = (props: ModalConfirmFuncProps) => {
    destroy: () => void;
    update: (configUpdate: ConfigUpdate) => void;
};
export type ModalCommonFunc = (props: ModalCommonFuncProps) => {
    destroy: () => void;
    update: (configUpdate: ConfigUpdate) => void;
};
export type ModalFunc = ModalConfirmFunc | ModalCommonFunc;
export type ModalStaticFunctions = Record<NonNullable<ModalFuncProps['type']>, ModalFunc>;
interface VoidFunction {
    (): void;
}
export type ModalConfirmFuncWithPromise = (...args: Parameters<ModalConfirmFunc>) => ReturnType<ModalConfirmFunc> & {
    then<T>(resolve: (confirmed: boolean) => T, reject: VoidFunction): Promise<T>;
};
export type ModalCommonFuncWithPromise = (...args: Parameters<ModalCommonFunc>) => ReturnType<ModalCommonFunc> & {
    then<T>(resolve: (confirmed: boolean) => T, reject: VoidFunction): Promise<T>;
};
export type ModalFuncWithPromise = ModalConfirmFuncWithPromise | ModalCommonFuncWithPromise;
export type HookAPI = Record<'confirm', ModalConfirmFuncWithPromise> & Omit<Record<keyof ModalStaticFunctions, ModalCommonFuncWithPromise>, 'confirm' | 'warn'>;
export {};
