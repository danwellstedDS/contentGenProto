// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import WarningTriangleOutlinedSVG from '../icons-svg/lib/WarningTriangleOutlined'
import Icon, { type BaseIconProps } from '../components'

const WarningTriangleOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={WarningTriangleOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    WarningTriangleOutlined.displayName = 'WarningTriangleOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(WarningTriangleOutlined)