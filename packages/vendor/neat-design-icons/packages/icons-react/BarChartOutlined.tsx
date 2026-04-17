// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import BarChartOutlinedSVG from '../icons-svg/lib/BarChartOutlined'
import Icon, { type BaseIconProps } from '../components'

const BarChartOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={BarChartOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    BarChartOutlined.displayName = 'BarChartOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(BarChartOutlined)