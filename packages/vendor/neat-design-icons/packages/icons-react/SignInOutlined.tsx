// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import SignInOutlinedSVG from '../icons-svg/lib/SignInOutlined'
import Icon, { type BaseIconProps } from '../components'

const SignInOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={SignInOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    SignInOutlined.displayName = 'SignInOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(SignInOutlined)