// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import PieChartFilledSVG from '../icons-svg/lib/PieChartFilled'
import Icon, { type BaseIconProps } from '../components'

const PieChartFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={PieChartFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    PieChartFilled.displayName = 'PieChartFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(PieChartFilled)