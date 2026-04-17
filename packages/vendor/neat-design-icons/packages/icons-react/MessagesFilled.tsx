// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import MessagesFilledSVG from '../icons-svg/lib/MessagesFilled'
import Icon, { type BaseIconProps } from '../components'

const MessagesFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={MessagesFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    MessagesFilled.displayName = 'MessagesFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(MessagesFilled)