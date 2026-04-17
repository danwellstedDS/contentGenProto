// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import ImageOutlinedSVG from '../icons-svg/lib/ImageOutlined'
import Icon, { type BaseIconProps } from '../components'

const ImageOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={ImageOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    ImageOutlined.displayName = 'ImageOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(ImageOutlined)