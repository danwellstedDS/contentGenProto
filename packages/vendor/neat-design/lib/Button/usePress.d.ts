/**
 * @file usePress.ts
 * @author minglong.zhao(minglong.zhao@derbysoft.net)
 */
import type { MouseEventHandler } from 'react';
interface Props {
    onMouseDown: MouseEventHandler<HTMLElement>;
    onMouseUp: MouseEventHandler<HTMLElement>;
    onMouseOut: MouseEventHandler<HTMLElement>;
}
declare const usePress: (props: Props) => {
    pressStatus: boolean;
    onMouseDown: MouseEventHandler<HTMLElement>;
    onMouseUp: MouseEventHandler<HTMLElement>;
    onMouseOut: MouseEventHandler<HTMLElement>;
};
export default usePress;
