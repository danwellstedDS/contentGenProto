// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import DiningOutlinedSVG from '../icons-svg/lib/DiningOutlined'
import Icon, { type BaseIconProps } from '../components'

const DiningOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={DiningOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    DiningOutlined.displayName = 'DiningOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(DiningOutlined)