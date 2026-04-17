// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import DashboardOutlinedSVG from '../icons-svg/lib/DashboardOutlined'
import Icon, { type BaseIconProps } from '../components'

const DashboardOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={DashboardOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    DashboardOutlined.displayName = 'DashboardOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(DashboardOutlined)