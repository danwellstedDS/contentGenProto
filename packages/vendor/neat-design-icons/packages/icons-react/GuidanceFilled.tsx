// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import GuidanceFilledSVG from '../icons-svg/lib/GuidanceFilled'
import Icon, { type BaseIconProps } from '../components'

const GuidanceFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={GuidanceFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    GuidanceFilled.displayName = 'GuidanceFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(GuidanceFilled)