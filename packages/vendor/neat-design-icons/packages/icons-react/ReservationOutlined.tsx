// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import ReservationOutlinedSVG from '../icons-svg/lib/ReservationOutlined'
import Icon, { type BaseIconProps } from '../components'

const ReservationOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={ReservationOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    ReservationOutlined.displayName = 'ReservationOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(ReservationOutlined)