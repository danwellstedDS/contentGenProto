// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import StopCircleOutlinedSVG from '../icons-svg/lib/StopCircleOutlined'
import Icon, { type BaseIconProps } from '../components'

const StopCircleOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={StopCircleOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    StopCircleOutlined.displayName = 'StopCircleOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(StopCircleOutlined)