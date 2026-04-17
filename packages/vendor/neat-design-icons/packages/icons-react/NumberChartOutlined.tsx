// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import NumberChartOutlinedSVG from '../icons-svg/lib/NumberChartOutlined'
import Icon, { type BaseIconProps } from '../components'

const NumberChartOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={NumberChartOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    NumberChartOutlined.displayName = 'NumberChartOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(NumberChartOutlined)