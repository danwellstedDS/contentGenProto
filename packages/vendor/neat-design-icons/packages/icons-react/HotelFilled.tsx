// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import HotelFilledSVG from '../icons-svg/lib/HotelFilled'
import Icon, { type BaseIconProps } from '../components'

const HotelFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={HotelFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    HotelFilled.displayName = 'HotelFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(HotelFilled)