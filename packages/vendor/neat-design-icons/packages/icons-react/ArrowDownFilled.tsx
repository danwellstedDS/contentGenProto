// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import ArrowDownFilledSVG from '../icons-svg/lib/ArrowDownFilled'
import Icon, { type BaseIconProps } from '../components'

const ArrowDownFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={ArrowDownFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    ArrowDownFilled.displayName = 'ArrowDownFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(ArrowDownFilled)