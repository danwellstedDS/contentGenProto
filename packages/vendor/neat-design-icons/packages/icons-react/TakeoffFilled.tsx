// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import TakeoffFilledSVG from '../icons-svg/lib/TakeoffFilled'
import Icon, { type BaseIconProps } from '../components'

const TakeoffFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={TakeoffFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    TakeoffFilled.displayName = 'TakeoffFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(TakeoffFilled)