// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import FeedOutlinedSVG from '../icons-svg/lib/FeedOutlined'
import Icon, { type BaseIconProps } from '../components'

const FeedOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={FeedOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    FeedOutlined.displayName = 'FeedOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(FeedOutlined)