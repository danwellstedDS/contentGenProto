/**
 * @file useFieldControlled.ts
 * @author minglong(minglong.zhao@derbysoft.net)
 */
export interface OnChangeInterFace<T> {
    (value: T, ...rest: any[]): void;
}
export interface UseControlProps<T, U extends OnChangeInterFace<T>> {
    value?: T;
    defaultValue?: T;
    onChange?: U;
    [key: string]: any;
}
/**
 * @description 用于编写同时具有受控组件与非受控组件两种模式的组件，对字段 {value} 与 {onChange}进行包装。
 * @deprecated 已废弃，可使用ahooks的useControllableValue
 */
declare const useFieldControlled: <T, U extends OnChangeInterFace<T>>(props: UseControlProps<T, U>) => {
    value: T;
    onChange: U;
};
export default useFieldControlled;
