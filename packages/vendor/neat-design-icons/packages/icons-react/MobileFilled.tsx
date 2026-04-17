// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import MobileFilledSVG from '../icons-svg/lib/MobileFilled'
import Icon, { type BaseIconProps } from '../components'

const MobileFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={MobileFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    MobileFilled.displayName = 'MobileFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(MobileFilled)