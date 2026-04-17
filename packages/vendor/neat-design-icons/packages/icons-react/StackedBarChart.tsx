// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import StackedBarChartSVG from '../icons-svg/lib/StackedBarChart'
import Icon, { type BaseIconProps } from '../components'

const StackedBarChart = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={StackedBarChartSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    StackedBarChart.displayName = 'StackedBarChart'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(StackedBarChart)