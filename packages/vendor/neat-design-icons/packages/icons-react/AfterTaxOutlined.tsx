// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import AfterTaxOutlinedSVG from '../icons-svg/lib/AfterTaxOutlined'
import Icon, { type BaseIconProps } from '../components'

const AfterTaxOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={AfterTaxOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    AfterTaxOutlined.displayName = 'AfterTaxOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(AfterTaxOutlined)