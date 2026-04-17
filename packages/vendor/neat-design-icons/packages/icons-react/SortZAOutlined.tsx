// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import SortZAOutlinedSVG from '../icons-svg/lib/SortZAOutlined'
import Icon, { type BaseIconProps } from '../components'

const SortZAOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={SortZAOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    SortZAOutlined.displayName = 'SortZAOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(SortZAOutlined)