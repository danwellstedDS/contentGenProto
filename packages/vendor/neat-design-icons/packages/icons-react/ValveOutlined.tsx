// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import ValveOutlinedSVG from '../icons-svg/lib/ValveOutlined'
import Icon, { type BaseIconProps } from '../components'

const ValveOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={ValveOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    ValveOutlined.displayName = 'ValveOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(ValveOutlined)