// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import SignOutOutlinedSVG from '../icons-svg/lib/SignOutOutlined'
import Icon, { type BaseIconProps } from '../components'

const SignOutOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={SignOutOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    SignOutOutlined.displayName = 'SignOutOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(SignOutOutlined)