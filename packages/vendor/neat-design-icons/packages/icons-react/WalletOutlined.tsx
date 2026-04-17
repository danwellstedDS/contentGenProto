// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import WalletOutlinedSVG from '../icons-svg/lib/WalletOutlined'
import Icon, { type BaseIconProps } from '../components'

const WalletOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={WalletOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    WalletOutlined.displayName = 'WalletOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(WalletOutlined)