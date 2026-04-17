// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import UserManagementOutlinedSVG from '../icons-svg/lib/UserManagementOutlined'
import Icon, { type BaseIconProps } from '../components'

const UserManagementOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={UserManagementOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    UserManagementOutlined.displayName = 'UserManagementOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(UserManagementOutlined)