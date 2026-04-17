// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import ChannelOutlinedSVG from '../icons-svg/lib/ChannelOutlined'
import Icon, { type BaseIconProps } from '../components'

const ChannelOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={ChannelOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    ChannelOutlined.displayName = 'ChannelOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(ChannelOutlined)