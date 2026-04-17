// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import UnlockFilledSVG from '../icons-svg/lib/UnlockFilled'
import Icon, { type BaseIconProps } from '../components'

const UnlockFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={UnlockFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    UnlockFilled.displayName = 'UnlockFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(UnlockFilled)