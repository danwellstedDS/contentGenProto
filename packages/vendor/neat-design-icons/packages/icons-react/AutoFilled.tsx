// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import AutoFilledSVG from '../icons-svg/lib/AutoFilled'
import Icon, { type BaseIconProps } from '../components'

const AutoFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={AutoFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    AutoFilled.displayName = 'AutoFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(AutoFilled)