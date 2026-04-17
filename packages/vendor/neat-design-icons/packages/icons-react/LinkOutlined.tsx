// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import LinkOutlinedSVG from '../icons-svg/lib/LinkOutlined'
import Icon, { type BaseIconProps } from '../components'

const LinkOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={LinkOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    LinkOutlined.displayName = 'LinkOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(LinkOutlined)