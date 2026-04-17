// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import CalculatorOutlinedSVG from '../icons-svg/lib/CalculatorOutlined'
import Icon, { type BaseIconProps } from '../components'

const CalculatorOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={CalculatorOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    CalculatorOutlined.displayName = 'CalculatorOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(CalculatorOutlined)