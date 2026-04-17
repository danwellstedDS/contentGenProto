// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import ScatterPlotOutlinedSVG from '../icons-svg/lib/ScatterPlotOutlined'
import Icon, { type BaseIconProps } from '../components'

const ScatterPlotOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={ScatterPlotOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    ScatterPlotOutlined.displayName = 'ScatterPlotOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(ScatterPlotOutlined)