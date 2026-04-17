// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import CalendarUtcFilledSVG from '../icons-svg/lib/CalendarUtcFilled'
import Icon, { type BaseIconProps } from '../components'

const CalendarUtcFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={CalendarUtcFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    CalendarUtcFilled.displayName = 'CalendarUtcFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(CalendarUtcFilled)