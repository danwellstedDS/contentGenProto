// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import BeforeTaxOutlinedSVG from '../icons-svg/lib/BeforeTaxOutlined'
import Icon, { type BaseIconProps } from '../components'

const BeforeTaxOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={BeforeTaxOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    BeforeTaxOutlined.displayName = 'BeforeTaxOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(BeforeTaxOutlined)