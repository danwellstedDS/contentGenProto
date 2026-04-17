// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import LandFilledSVG from '../icons-svg/lib/LandFilled'
import Icon, { type BaseIconProps } from '../components'

const LandFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={LandFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    LandFilled.displayName = 'LandFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(LandFilled)