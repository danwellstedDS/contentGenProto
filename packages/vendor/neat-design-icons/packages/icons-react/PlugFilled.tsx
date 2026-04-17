// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import PlugFilledSVG from '../icons-svg/lib/PlugFilled'
import Icon, { type BaseIconProps } from '../components'

const PlugFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={PlugFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    PlugFilled.displayName = 'PlugFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(PlugFilled)