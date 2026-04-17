/**
 * @file utils.tsx
 * @author minglong.zhao(minglong.zhao@derbysoft.net)
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import type { ModalFuncProps as AntModalFuncProps } from 'antd';
import type { ReturnStyles } from '../hooks/useCreateStyles';
import type { ModalFuncProps } from './types';
/**
 * Format Modal func props
 * @param style
 * @param buttonStyle
 * @param overridedType
 */
export declare const formatModalConfigForCreate: (style: ReturnStyles, buttonStyle: ReturnStyles, overridedType?: ModalFuncProps['type']) => ({ className, size, centered, type, width, icon, loading, content, footer, okType, okButtonProps, cancelButtonProps, ...restProps }: ModalFuncProps) => AntModalFuncProps;
/**
 * Format Modal func props
 * @param style
 * @param buttonStyle
 * @param overridedType
 */
export declare const formatModalConfigForUpdate: (style: ReturnStyles, buttonStyle: ReturnStyles, overridedType?: ModalFuncProps['type']) => ({ className, size, centered, type, width, icon, loading, content, footer, okType, okButtonProps, cancelButtonProps, ...restProps }: ModalFuncProps) => AntModalFuncProps;
