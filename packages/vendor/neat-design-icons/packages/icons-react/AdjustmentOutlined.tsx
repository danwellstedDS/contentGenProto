// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import AdjustmentOutlinedSVG from '../icons-svg/lib/AdjustmentOutlined'
import Icon, { type BaseIconProps } from '../components'

const AdjustmentOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={AdjustmentOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    AdjustmentOutlined.displayName = 'AdjustmentOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(AdjustmentOutlined)