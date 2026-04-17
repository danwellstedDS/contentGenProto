// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import WarningCircleOutlinedSVG from '../icons-svg/lib/WarningCircleOutlined'
import Icon, { type BaseIconProps } from '../components'

const WarningCircleOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={WarningCircleOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    WarningCircleOutlined.displayName = 'WarningCircleOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(WarningCircleOutlined)