/**
 * @file Button.tsx
 * @author minglong.zhao(minglong.zhao@derbysoft.net)
 */
import { FC } from 'react';
import { ButtonProps, ButtonSize } from './types';
interface Props {
    size: ButtonSize;
    type: ButtonProps['type'];
    disabled: ButtonProps['disabled'];
}
declare const Loading: FC<Props>;
export default Loading;
