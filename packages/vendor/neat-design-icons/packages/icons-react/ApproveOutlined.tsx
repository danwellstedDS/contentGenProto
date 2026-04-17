// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import ApproveOutlinedSVG from '../icons-svg/lib/ApproveOutlined'
import Icon, { type BaseIconProps } from '../components'

const ApproveOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={ApproveOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    ApproveOutlined.displayName = 'ApproveOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(ApproveOutlined)