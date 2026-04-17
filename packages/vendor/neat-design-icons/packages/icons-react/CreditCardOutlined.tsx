// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import CreditCardOutlinedSVG from '../icons-svg/lib/CreditCardOutlined'
import Icon, { type BaseIconProps } from '../components'

const CreditCardOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={CreditCardOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    CreditCardOutlined.displayName = 'CreditCardOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(CreditCardOutlined)