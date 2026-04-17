// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import UsersOutlinedSVG from '../icons-svg/lib/UsersOutlined'
import Icon, { type BaseIconProps } from '../components'

const UsersOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={UsersOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    UsersOutlined.displayName = 'UsersOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(UsersOutlined)