// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import GuidanceOutlinedSVG from '../icons-svg/lib/GuidanceOutlined'
import Icon, { type BaseIconProps } from '../components'

const GuidanceOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={GuidanceOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    GuidanceOutlined.displayName = 'GuidanceOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(GuidanceOutlined)