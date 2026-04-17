// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import NumberChartTwoToneSVG from '../icons-svg/lib/NumberChartTwoTone'
import Icon, { type BaseIconProps } from '../components'

const NumberChartTwoTone = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={true} ref={ref} component={NumberChartTwoToneSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    NumberChartTwoTone.displayName = 'NumberChartTwoTone'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(NumberChartTwoTone)