// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import PasswordHideSVG from '../icons-svg/lib/PasswordHide'
import Icon, { type BaseIconProps } from '../components'

const PasswordHide = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={PasswordHideSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    PasswordHide.displayName = 'PasswordHide'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(PasswordHide)