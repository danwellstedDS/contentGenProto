// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import PinOutlinedSVG from '../icons-svg/lib/PinOutlined'
import Icon, { type BaseIconProps } from '../components'

const PinOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={PinOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    PinOutlined.displayName = 'PinOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(PinOutlined)