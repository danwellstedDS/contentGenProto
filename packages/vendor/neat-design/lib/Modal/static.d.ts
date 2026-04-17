/**
 * @file static.tsx
 * @author minglong.zhao(minglong.zhao@derbysoft.net)
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import type { ReactElement } from 'react';
import type { ModalFuncProps } from './types';
/**
 * Modal size
 */
export declare enum ModalSizeEnum {
    'small' = 400,
    'medium' = 600,
    'large' = 960
}
/**
 * Modal icon map
 */
export declare const IconMap: Partial<Record<ModalFuncProps['type'], ReactElement>>;
