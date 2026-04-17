// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import ArrowDoubleLeftOutlinedSVG from '../icons-svg/lib/ArrowDoubleLeftOutlined'
import Icon, { type BaseIconProps } from '../components'

const ArrowDoubleLeftOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={ArrowDoubleLeftOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    ArrowDoubleLeftOutlined.displayName = 'ArrowDoubleLeftOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(ArrowDoubleLeftOutlined)