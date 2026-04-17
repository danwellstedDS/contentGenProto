// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import AccountManagementOutlinedSVG from '../icons-svg/lib/AccountManagementOutlined'
import Icon, { type BaseIconProps } from '../components'

const AccountManagementOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={AccountManagementOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    AccountManagementOutlined.displayName = 'AccountManagementOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(AccountManagementOutlined)