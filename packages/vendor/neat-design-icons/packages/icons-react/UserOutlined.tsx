// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import UserOutlinedSVG from '../icons-svg/lib/UserOutlined'
import Icon, { type BaseIconProps } from '../components'

const UserOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={UserOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    UserOutlined.displayName = 'UserOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(UserOutlined)