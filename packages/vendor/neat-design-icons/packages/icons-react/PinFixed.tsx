// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import PinFixedSVG from '../icons-svg/lib/PinFixed'
import Icon, { type BaseIconProps } from '../components'

const PinFixed = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={PinFixedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    PinFixed.displayName = 'PinFixed'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(PinFixed)