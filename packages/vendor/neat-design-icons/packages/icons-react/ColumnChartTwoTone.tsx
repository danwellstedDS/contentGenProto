// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import ColumnChartTwoToneSVG from '../icons-svg/lib/ColumnChartTwoTone'
import Icon, { type BaseIconProps } from '../components'

const ColumnChartTwoTone = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={true} ref={ref} component={ColumnChartTwoToneSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    ColumnChartTwoTone.displayName = 'ColumnChartTwoTone'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(ColumnChartTwoTone)