// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import ArrowDownCircleOutlinedSVG from '../icons-svg/lib/ArrowDownCircleOutlined'
import Icon, { type BaseIconProps } from '../components'

const ArrowDownCircleOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={ArrowDownCircleOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    ArrowDownCircleOutlined.displayName = 'ArrowDownCircleOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(ArrowDownCircleOutlined)