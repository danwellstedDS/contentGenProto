// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import SeatFilledSVG from '../icons-svg/lib/SeatFilled'
import Icon, { type BaseIconProps } from '../components'

const SeatFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={SeatFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    SeatFilled.displayName = 'SeatFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(SeatFilled)