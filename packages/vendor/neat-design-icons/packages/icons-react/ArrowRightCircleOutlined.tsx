// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import ArrowRightCircleOutlinedSVG from '../icons-svg/lib/ArrowRightCircleOutlined'
import Icon, { type BaseIconProps } from '../components'

const ArrowRightCircleOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={ArrowRightCircleOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    ArrowRightCircleOutlined.displayName = 'ArrowRightCircleOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(ArrowRightCircleOutlined)