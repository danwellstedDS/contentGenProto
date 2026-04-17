// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import ArrowLeftFilledSVG from '../icons-svg/lib/ArrowLeftFilled'
import Icon, { type BaseIconProps } from '../components'

const ArrowLeftFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={ArrowLeftFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    ArrowLeftFilled.displayName = 'ArrowLeftFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(ArrowLeftFilled)