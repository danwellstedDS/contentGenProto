// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import GlobeOutlinedSVG from '../icons-svg/lib/GlobeOutlined'
import Icon, { type BaseIconProps } from '../components'

const GlobeOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={GlobeOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    GlobeOutlined.displayName = 'GlobeOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(GlobeOutlined)