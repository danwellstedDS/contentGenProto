// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import ArrowDoubleUpOutlinedSVG from '../icons-svg/lib/ArrowDoubleUpOutlined'
import Icon, { type BaseIconProps } from '../components'

const ArrowDoubleUpOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={ArrowDoubleUpOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    ArrowDoubleUpOutlined.displayName = 'ArrowDoubleUpOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(ArrowDoubleUpOutlined)