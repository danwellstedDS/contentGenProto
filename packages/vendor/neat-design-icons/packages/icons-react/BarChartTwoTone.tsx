// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import BarChartTwoToneSVG from '../icons-svg/lib/BarChartTwoTone'
import Icon, { type BaseIconProps } from '../components'

const BarChartTwoTone = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={true} ref={ref} component={BarChartTwoToneSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    BarChartTwoTone.displayName = 'BarChartTwoTone'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(BarChartTwoTone)