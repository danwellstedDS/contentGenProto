// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import FundTransferFilledSVG from '../icons-svg/lib/FundTransferFilled'
import Icon, { type BaseIconProps } from '../components'

const FundTransferFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={FundTransferFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    FundTransferFilled.displayName = 'FundTransferFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(FundTransferFilled)