// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import AccountSwitchOutlinedSVG from '../icons-svg/lib/AccountSwitchOutlined'
import Icon, { type BaseIconProps } from '../components'

const AccountSwitchOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={AccountSwitchOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    AccountSwitchOutlined.displayName = 'AccountSwitchOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(AccountSwitchOutlined)