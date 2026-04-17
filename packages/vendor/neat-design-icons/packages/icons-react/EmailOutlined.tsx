// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import EmailOutlinedSVG from '../icons-svg/lib/EmailOutlined'
import Icon, { type BaseIconProps } from '../components'

const EmailOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={EmailOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    EmailOutlined.displayName = 'EmailOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(EmailOutlined)