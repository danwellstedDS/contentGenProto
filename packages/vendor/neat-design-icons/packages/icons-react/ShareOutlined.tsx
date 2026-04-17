// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import ShareOutlinedSVG from '../icons-svg/lib/ShareOutlined'
import Icon, { type BaseIconProps } from '../components'

const ShareOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={ShareOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    ShareOutlined.displayName = 'ShareOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(ShareOutlined)