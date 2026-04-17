// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import LockOutlinedSVG from '../icons-svg/lib/LockOutlined'
import Icon, { type BaseIconProps } from '../components'

const LockOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={LockOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    LockOutlined.displayName = 'LockOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(LockOutlined)