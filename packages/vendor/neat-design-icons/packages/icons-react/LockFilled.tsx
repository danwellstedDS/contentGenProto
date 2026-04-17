// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import LockFilledSVG from '../icons-svg/lib/LockFilled'
import Icon, { type BaseIconProps } from '../components'

const LockFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={LockFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    LockFilled.displayName = 'LockFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(LockFilled)