// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import BaggageOutlinedSVG from '../icons-svg/lib/BaggageOutlined'
import Icon, { type BaseIconProps } from '../components'

const BaggageOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={BaggageOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    BaggageOutlined.displayName = 'BaggageOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(BaggageOutlined)