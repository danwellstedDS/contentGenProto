// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import StopCircleFilledSVG from '../icons-svg/lib/StopCircleFilled'
import Icon, { type BaseIconProps } from '../components'

const StopCircleFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={StopCircleFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    StopCircleFilled.displayName = 'StopCircleFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(StopCircleFilled)