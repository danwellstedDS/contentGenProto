// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import HotelOutlinedSVG from '../icons-svg/lib/HotelOutlined'
import Icon, { type BaseIconProps } from '../components'

const HotelOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={HotelOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    HotelOutlined.displayName = 'HotelOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(HotelOutlined)