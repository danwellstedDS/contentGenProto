// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import ArrowUpCircleOutlinedSVG from '../icons-svg/lib/ArrowUpCircleOutlined'
import Icon, { type BaseIconProps } from '../components'

const ArrowUpCircleOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={ArrowUpCircleOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    ArrowUpCircleOutlined.displayName = 'ArrowUpCircleOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(ArrowUpCircleOutlined)