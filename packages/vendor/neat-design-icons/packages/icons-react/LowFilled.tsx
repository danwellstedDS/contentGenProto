// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import LowFilledSVG from '../icons-svg/lib/LowFilled'
import Icon, { type BaseIconProps } from '../components'

const LowFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={LowFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    LowFilled.displayName = 'LowFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(LowFilled)