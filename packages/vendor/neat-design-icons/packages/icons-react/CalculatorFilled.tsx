// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import CalculatorFilledSVG from '../icons-svg/lib/CalculatorFilled'
import Icon, { type BaseIconProps } from '../components'

const CalculatorFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={CalculatorFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    CalculatorFilled.displayName = 'CalculatorFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(CalculatorFilled)