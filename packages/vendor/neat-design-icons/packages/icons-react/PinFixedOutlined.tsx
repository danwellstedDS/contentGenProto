// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import PinFixedOutlinedSVG from '../icons-svg/lib/PinFixedOutlined'
import Icon, { type BaseIconProps } from '../components'

const PinFixedOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={PinFixedOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    PinFixedOutlined.displayName = 'PinFixedOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(PinFixedOutlined)