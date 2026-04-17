// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import PieChartTwoToneSVG from '../icons-svg/lib/PieChartTwoTone'
import Icon, { type BaseIconProps } from '../components'

const PieChartTwoTone = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={true} ref={ref} component={PieChartTwoToneSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    PieChartTwoTone.displayName = 'PieChartTwoTone'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(PieChartTwoTone)