// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import EventsOutlinedSVG from '../icons-svg/lib/EventsOutlined'
import Icon, { type BaseIconProps } from '../components'

const EventsOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={EventsOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    EventsOutlined.displayName = 'EventsOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(EventsOutlined)