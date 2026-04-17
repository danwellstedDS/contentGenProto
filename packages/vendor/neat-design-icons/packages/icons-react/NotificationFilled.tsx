// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import NotificationFilledSVG from '../icons-svg/lib/NotificationFilled'
import Icon, { type BaseIconProps } from '../components'

const NotificationFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={NotificationFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    NotificationFilled.displayName = 'NotificationFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(NotificationFilled)