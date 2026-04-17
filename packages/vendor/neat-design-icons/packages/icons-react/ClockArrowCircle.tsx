// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import ClockArrowCircleSVG from '../icons-svg/lib/ClockArrowCircle'
import Icon, { type BaseIconProps } from '../components'

const ClockArrowCircle = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={ClockArrowCircleSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    ClockArrowCircle.displayName = 'ClockArrowCircle'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(ClockArrowCircle)