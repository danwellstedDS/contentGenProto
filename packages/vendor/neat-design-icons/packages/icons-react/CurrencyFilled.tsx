// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import CurrencyFilledSVG from '../icons-svg/lib/CurrencyFilled'
import Icon, { type BaseIconProps } from '../components'

const CurrencyFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={CurrencyFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    CurrencyFilled.displayName = 'CurrencyFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(CurrencyFilled)