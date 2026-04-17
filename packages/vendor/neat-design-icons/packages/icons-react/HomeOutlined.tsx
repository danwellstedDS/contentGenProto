// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import HomeOutlinedSVG from '../icons-svg/lib/HomeOutlined'
import Icon, { type BaseIconProps } from '../components'

const HomeOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={HomeOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    HomeOutlined.displayName = 'HomeOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(HomeOutlined)