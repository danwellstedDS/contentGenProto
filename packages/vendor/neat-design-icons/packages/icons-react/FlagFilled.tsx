// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import FlagFilledSVG from '../icons-svg/lib/FlagFilled'
import Icon, { type BaseIconProps } from '../components'

const FlagFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={FlagFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    FlagFilled.displayName = 'FlagFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(FlagFilled)