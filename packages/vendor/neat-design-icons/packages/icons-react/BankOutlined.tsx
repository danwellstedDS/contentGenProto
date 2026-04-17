// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import BankOutlinedSVG from '../icons-svg/lib/BankOutlined'
import Icon, { type BaseIconProps } from '../components'

const BankOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={BankOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    BankOutlined.displayName = 'BankOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(BankOutlined)