/**
 * @file index.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 * @author minglong.zhao(minglong.zhao@derbysoft.net)
 */

// Hooks
import useInternalModal from "./hooks/useModal";

// Components
import { Modal as AntModal } from 'antd';
import InternalModal from "./Modal";
var Modal = InternalModal;
Modal.useModal = useInternalModal;
Modal.config = AntModal.config;
Modal.destroyAll = AntModal.destroyAll;
export default Modal;