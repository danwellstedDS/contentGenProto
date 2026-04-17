// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import ArrowDoubleRightOutlinedSVG from '../icons-svg/lib/ArrowDoubleRightOutlined'
import Icon, { type BaseIconProps } from '../components'

const ArrowDoubleRightOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={ArrowDoubleRightOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    ArrowDoubleRightOutlined.displayName = 'ArrowDoubleRightOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(ArrowDoubleRightOutlined)