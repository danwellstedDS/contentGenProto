// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import CalendarFilledSVG from '../icons-svg/lib/CalendarFilled'
import Icon, { type BaseIconProps } from '../components'

const CalendarFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={CalendarFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    CalendarFilled.displayName = 'CalendarFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(CalendarFilled)