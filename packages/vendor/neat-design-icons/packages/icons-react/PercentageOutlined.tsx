// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import PercentageOutlinedSVG from '../icons-svg/lib/PercentageOutlined'
import Icon, { type BaseIconProps } from '../components'

const PercentageOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={PercentageOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    PercentageOutlined.displayName = 'PercentageOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(PercentageOutlined)