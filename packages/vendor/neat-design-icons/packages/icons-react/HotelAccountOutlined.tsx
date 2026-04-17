// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import HotelAccountOutlinedSVG from '../icons-svg/lib/HotelAccountOutlined'
import Icon, { type BaseIconProps } from '../components'

const HotelAccountOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={HotelAccountOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    HotelAccountOutlined.displayName = 'HotelAccountOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(HotelAccountOutlined)