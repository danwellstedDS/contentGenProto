// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import TourOutlinedSVG from '../icons-svg/lib/TourOutlined'
import Icon, { type BaseIconProps } from '../components'

const TourOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={TourOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    TourOutlined.displayName = 'TourOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(TourOutlined)