// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import ArrowLeftCircleOutlinedSVG from '../icons-svg/lib/ArrowLeftCircleOutlined'
import Icon, { type BaseIconProps } from '../components'

const ArrowLeftCircleOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={ArrowLeftCircleOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    ArrowLeftCircleOutlined.displayName = 'ArrowLeftCircleOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(ArrowLeftCircleOutlined)