// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import DesktopOutlinedSVG from '../icons-svg/lib/DesktopOutlined'
import Icon, { type BaseIconProps } from '../components'

const DesktopOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={DesktopOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    DesktopOutlined.displayName = 'DesktopOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(DesktopOutlined)