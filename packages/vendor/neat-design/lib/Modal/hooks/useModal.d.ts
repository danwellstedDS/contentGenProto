/**
 * @file useModal.tsx
 * @author minglong.zhao(minglong.zhao@derbysoft.net)
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
/// <reference types="react" />
import type { HookAPI } from '../types';
declare const useInternalModal: () => readonly [HookAPI, React.ReactElement<any, string | React.JSXElementConstructor<any>>];
export default useInternalModal;
