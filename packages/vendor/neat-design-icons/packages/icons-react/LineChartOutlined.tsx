// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import LineChartOutlinedSVG from '../icons-svg/lib/LineChartOutlined'
import Icon, { type BaseIconProps } from '../components'

const LineChartOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={LineChartOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    LineChartOutlined.displayName = 'LineChartOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(LineChartOutlined)