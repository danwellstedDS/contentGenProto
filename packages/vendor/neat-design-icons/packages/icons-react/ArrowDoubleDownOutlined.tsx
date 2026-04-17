// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import ArrowDoubleDownOutlinedSVG from '../icons-svg/lib/ArrowDoubleDownOutlined'
import Icon, { type BaseIconProps } from '../components'

const ArrowDoubleDownOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={ArrowDoubleDownOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    ArrowDoubleDownOutlined.displayName = 'ArrowDoubleDownOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(ArrowDoubleDownOutlined)