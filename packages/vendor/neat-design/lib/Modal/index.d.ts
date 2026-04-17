/**
 * @file index.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 * @author minglong.zhao(minglong.zhao@derbysoft.net)
 */
import useInternalModal from './hooks/useModal';
import { Modal as AntModal } from 'antd';
import InternalModal from './Modal';
type InternalModalType = typeof InternalModal;
type CompoundedComponent = InternalModalType & {
    useModal: typeof useInternalModal;
    config: typeof AntModal.config;
    destroyAll: typeof AntModal.destroyAll;
};
declare const Modal: CompoundedComponent;
export type { ModalProps } from './types';
export default Modal;
