// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import StopArrowCircleOutlinedSVG from '../icons-svg/lib/StopArrowCircleOutlined'
import Icon, { type BaseIconProps } from '../components'

const StopArrowCircleOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={StopArrowCircleOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    StopArrowCircleOutlined.displayName = 'StopArrowCircleOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(StopArrowCircleOutlined)