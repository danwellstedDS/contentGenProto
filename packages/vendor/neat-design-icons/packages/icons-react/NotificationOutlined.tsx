// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import NotificationOutlinedSVG from '../icons-svg/lib/NotificationOutlined'
import Icon, { type BaseIconProps } from '../components'

const NotificationOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={NotificationOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    NotificationOutlined.displayName = 'NotificationOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(NotificationOutlined)