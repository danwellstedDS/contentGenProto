// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import FullscreenOutlinedSVG from '../icons-svg/lib/FullscreenOutlined'
import Icon, { type BaseIconProps } from '../components'

const FullscreenOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={FullscreenOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    FullscreenOutlined.displayName = 'FullscreenOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(FullscreenOutlined)