// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import ArrowRightFilledSVG from '../icons-svg/lib/ArrowRightFilled'
import Icon, { type BaseIconProps } from '../components'

const ArrowRightFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={ArrowRightFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    ArrowRightFilled.displayName = 'ArrowRightFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(ArrowRightFilled)