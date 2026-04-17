// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import PinFilledSVG from '../icons-svg/lib/PinFilled'
import Icon, { type BaseIconProps } from '../components'

const PinFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={PinFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    PinFilled.displayName = 'PinFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(PinFilled)