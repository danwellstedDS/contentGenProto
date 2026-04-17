// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import TargetOutlinedSVG from '../icons-svg/lib/TargetOutlined'
import Icon, { type BaseIconProps } from '../components'

const TargetOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={TargetOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    TargetOutlined.displayName = 'TargetOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(TargetOutlined)