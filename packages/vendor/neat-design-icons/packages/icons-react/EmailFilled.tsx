// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import EmailFilledSVG from '../icons-svg/lib/EmailFilled'
import Icon, { type BaseIconProps } from '../components'

const EmailFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={EmailFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    EmailFilled.displayName = 'EmailFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(EmailFilled)