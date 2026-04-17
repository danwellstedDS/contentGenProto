// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import LandOutlinedSVG from '../icons-svg/lib/LandOutlined'
import Icon, { type BaseIconProps } from '../components'

const LandOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={LandOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    LandOutlined.displayName = 'LandOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(LandOutlined)