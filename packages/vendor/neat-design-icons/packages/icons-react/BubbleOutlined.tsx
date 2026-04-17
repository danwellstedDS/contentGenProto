// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import BubbleOutlinedSVG from '../icons-svg/lib/BubbleOutlined'
import Icon, { type BaseIconProps } from '../components'

const BubbleOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={BubbleOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    BubbleOutlined.displayName = 'BubbleOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(BubbleOutlined)