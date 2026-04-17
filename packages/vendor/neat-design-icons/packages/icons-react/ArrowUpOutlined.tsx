// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import ArrowUpOutlinedSVG from '../icons-svg/lib/ArrowUpOutlined'
import Icon, { type BaseIconProps } from '../components'

const ArrowUpOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={ArrowUpOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    ArrowUpOutlined.displayName = 'ArrowUpOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(ArrowUpOutlined)