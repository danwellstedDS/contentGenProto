// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import UserFilledSVG from '../icons-svg/lib/UserFilled'
import Icon, { type BaseIconProps } from '../components'

const UserFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={UserFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    UserFilled.displayName = 'UserFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(UserFilled)