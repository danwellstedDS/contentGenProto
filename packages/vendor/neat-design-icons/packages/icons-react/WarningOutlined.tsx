// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import WarningOutlinedSVG from '../icons-svg/lib/WarningOutlined'
import Icon, { type BaseIconProps } from '../components'

const WarningOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={WarningOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    WarningOutlined.displayName = 'WarningOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(WarningOutlined)