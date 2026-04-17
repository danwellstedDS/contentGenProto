// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import FundsFilledSVG from '../icons-svg/lib/FundsFilled'
import Icon, { type BaseIconProps } from '../components'

const FundsFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={FundsFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    FundsFilled.displayName = 'FundsFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(FundsFilled)