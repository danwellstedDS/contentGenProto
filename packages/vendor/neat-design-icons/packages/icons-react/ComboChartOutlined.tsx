// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import ComboChartOutlinedSVG from '../icons-svg/lib/ComboChartOutlined'
import Icon, { type BaseIconProps } from '../components'

const ComboChartOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={ComboChartOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    ComboChartOutlined.displayName = 'ComboChartOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(ComboChartOutlined)