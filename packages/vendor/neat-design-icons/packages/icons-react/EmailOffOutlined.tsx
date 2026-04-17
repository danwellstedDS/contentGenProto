// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import EmailOffOutlinedSVG from '../icons-svg/lib/EmailOffOutlined'
import Icon, { type BaseIconProps } from '../components'

const EmailOffOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={EmailOffOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    EmailOffOutlined.displayName = 'EmailOffOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(EmailOffOutlined)