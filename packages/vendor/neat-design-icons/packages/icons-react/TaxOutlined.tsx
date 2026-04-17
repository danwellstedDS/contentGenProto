// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import TaxOutlinedSVG from '../icons-svg/lib/TaxOutlined'
import Icon, { type BaseIconProps } from '../components'

const TaxOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={TaxOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    TaxOutlined.displayName = 'TaxOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(TaxOutlined)