// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import ClockFilledSVG from '../icons-svg/lib/ClockFilled'
import Icon, { type BaseIconProps } from '../components'

const ClockFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={ClockFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    ClockFilled.displayName = 'ClockFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(ClockFilled)