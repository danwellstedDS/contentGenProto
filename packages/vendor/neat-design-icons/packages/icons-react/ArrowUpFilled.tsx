// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import ArrowUpFilledSVG from '../icons-svg/lib/ArrowUpFilled'
import Icon, { type BaseIconProps } from '../components'

const ArrowUpFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={ArrowUpFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    ArrowUpFilled.displayName = 'ArrowUpFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(ArrowUpFilled)