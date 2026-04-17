// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import MoreVerticalDotSVG from '../icons-svg/lib/MoreVerticalDot'
import Icon, { type BaseIconProps } from '../components'

const MoreVerticalDot = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={MoreVerticalDotSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    MoreVerticalDot.displayName = 'MoreVerticalDot'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(MoreVerticalDot)