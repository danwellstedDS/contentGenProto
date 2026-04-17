// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import ChannelFilledSVG from '../icons-svg/lib/ChannelFilled'
import Icon, { type BaseIconProps } from '../components'

const ChannelFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={ChannelFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    ChannelFilled.displayName = 'ChannelFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(ChannelFilled)