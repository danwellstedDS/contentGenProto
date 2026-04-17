// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import ParkingOutlinedSVG from '../icons-svg/lib/ParkingOutlined'
import Icon, { type BaseIconProps } from '../components'

const ParkingOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={ParkingOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    ParkingOutlined.displayName = 'ParkingOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(ParkingOutlined)