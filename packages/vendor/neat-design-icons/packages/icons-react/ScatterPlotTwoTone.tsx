// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import ScatterPlotTwoToneSVG from '../icons-svg/lib/ScatterPlotTwoTone'
import Icon, { type BaseIconProps } from '../components'

const ScatterPlotTwoTone = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={true} ref={ref} component={ScatterPlotTwoToneSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    ScatterPlotTwoTone.displayName = 'ScatterPlotTwoTone'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(ScatterPlotTwoTone)