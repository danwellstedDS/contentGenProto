// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import ExchangeOutlinedSVG from '../icons-svg/lib/ExchangeOutlined'
import Icon, { type BaseIconProps } from '../components'

const ExchangeOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={ExchangeOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    ExchangeOutlined.displayName = 'ExchangeOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(ExchangeOutlined)