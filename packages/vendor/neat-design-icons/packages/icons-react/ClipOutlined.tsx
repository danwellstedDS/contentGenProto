// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import ClipOutlinedSVG from '../icons-svg/lib/ClipOutlined'
import Icon, { type BaseIconProps } from '../components'

const ClipOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={ClipOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    ClipOutlined.displayName = 'ClipOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(ClipOutlined)