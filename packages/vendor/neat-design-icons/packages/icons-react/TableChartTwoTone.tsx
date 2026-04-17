// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import TableChartTwoToneSVG from '../icons-svg/lib/TableChartTwoTone'
import Icon, { type BaseIconProps } from '../components'

const TableChartTwoTone = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={true} ref={ref} component={TableChartTwoToneSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    TableChartTwoTone.displayName = 'TableChartTwoTone'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(TableChartTwoTone)