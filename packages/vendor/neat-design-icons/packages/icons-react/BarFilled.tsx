// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import BarFilledSVG from '../icons-svg/lib/BarFilled'
import Icon, { type BaseIconProps } from '../components'

const BarFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={BarFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    BarFilled.displayName = 'BarFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(BarFilled)