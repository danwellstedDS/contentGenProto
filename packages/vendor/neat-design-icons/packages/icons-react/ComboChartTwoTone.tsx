// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import ComboChartTwoToneSVG from '../icons-svg/lib/ComboChartTwoTone'
import Icon, { type BaseIconProps } from '../components'

const ComboChartTwoTone = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={true} ref={ref} component={ComboChartTwoToneSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    ComboChartTwoTone.displayName = 'ComboChartTwoTone'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(ComboChartTwoTone)