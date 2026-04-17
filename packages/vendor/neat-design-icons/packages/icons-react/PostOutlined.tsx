// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import PostOutlinedSVG from '../icons-svg/lib/PostOutlined'
import Icon, { type BaseIconProps } from '../components'

const PostOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={PostOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    PostOutlined.displayName = 'PostOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(PostOutlined)