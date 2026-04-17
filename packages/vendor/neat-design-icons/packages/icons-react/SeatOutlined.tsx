// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import SeatOutlinedSVG from '../icons-svg/lib/SeatOutlined'
import Icon, { type BaseIconProps } from '../components'

const SeatOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={SeatOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    SeatOutlined.displayName = 'SeatOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(SeatOutlined)