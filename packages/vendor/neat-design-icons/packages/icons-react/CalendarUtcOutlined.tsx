// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import CalendarUtcOutlinedSVG from '../icons-svg/lib/CalendarUtcOutlined'
import Icon, { type BaseIconProps } from '../components'

const CalendarUtcOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={CalendarUtcOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    CalendarUtcOutlined.displayName = 'CalendarUtcOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(CalendarUtcOutlined)