// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import TopmostFilledSVG from '../icons-svg/lib/TopmostFilled'
import Icon, { type BaseIconProps } from '../components'

const TopmostFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={TopmostFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    TopmostFilled.displayName = 'TopmostFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(TopmostFilled)