// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import DesktopFilledSVG from '../icons-svg/lib/DesktopFilled'
import Icon, { type BaseIconProps } from '../components'

const DesktopFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={DesktopFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    DesktopFilled.displayName = 'DesktopFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(DesktopFilled)