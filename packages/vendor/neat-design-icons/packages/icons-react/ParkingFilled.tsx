// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import ParkingFilledSVG from '../icons-svg/lib/ParkingFilled'
import Icon, { type BaseIconProps } from '../components'

const ParkingFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={ParkingFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    ParkingFilled.displayName = 'ParkingFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(ParkingFilled)