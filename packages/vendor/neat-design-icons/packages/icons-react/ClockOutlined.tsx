// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import ClockOutlinedSVG from '../icons-svg/lib/ClockOutlined'
import Icon, { type BaseIconProps } from '../components'

const ClockOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={ClockOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    ClockOutlined.displayName = 'ClockOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(ClockOutlined)