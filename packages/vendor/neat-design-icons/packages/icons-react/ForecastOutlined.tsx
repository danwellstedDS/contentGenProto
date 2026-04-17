// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import ForecastOutlinedSVG from '../icons-svg/lib/ForecastOutlined'
import Icon, { type BaseIconProps } from '../components'

const ForecastOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={ForecastOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    ForecastOutlined.displayName = 'ForecastOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(ForecastOutlined)