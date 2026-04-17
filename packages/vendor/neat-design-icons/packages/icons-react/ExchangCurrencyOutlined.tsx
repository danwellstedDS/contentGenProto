// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import ExchangCurrencyOutlinedSVG from '../icons-svg/lib/ExchangCurrencyOutlined'
import Icon, { type BaseIconProps } from '../components'

const ExchangCurrencyOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={ExchangCurrencyOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    ExchangCurrencyOutlined.displayName = 'ExchangCurrencyOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(ExchangCurrencyOutlined)