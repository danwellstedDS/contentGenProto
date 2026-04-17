// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import EmailOnTwoToneSVG from '../icons-svg/lib/EmailOnTwoTone'
import Icon, { type BaseIconProps } from '../components'

const EmailOnTwoTone = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={true} ref={ref} component={EmailOnTwoToneSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    EmailOnTwoTone.displayName = 'EmailOnTwoTone'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(EmailOnTwoTone)