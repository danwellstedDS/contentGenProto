// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import MultiplierFilledSVG from '../icons-svg/lib/MultiplierFilled'
import Icon, { type BaseIconProps } from '../components'

const MultiplierFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={MultiplierFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    MultiplierFilled.displayName = 'MultiplierFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(MultiplierFilled)