import { createContext } from 'react';
import { type TwoToneColorsTypes } from '.';

export interface IconContextProps {
  prefixCls?: string;
  rootClassName?: string;
  csp?: { nonce?: string };
  twoToneColors?: TwoToneColorsTypes
  disabledTwoToneColors?: TwoToneColorsTypes
  inverseTwoToneColors?: TwoToneColorsTypes
}

const IconContext = createContext<IconContextProps>({});

export default IconContext;
