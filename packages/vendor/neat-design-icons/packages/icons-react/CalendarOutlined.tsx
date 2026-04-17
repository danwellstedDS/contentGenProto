// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import CalendarOutlinedSVG from '../icons-svg/lib/CalendarOutlined'
import Icon, { type BaseIconProps } from '../components'

const CalendarOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={CalendarOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    CalendarOutlined.displayName = 'CalendarOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(CalendarOutlined)