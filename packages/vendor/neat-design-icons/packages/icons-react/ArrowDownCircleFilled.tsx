// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import ArrowDownCircleFilledSVG from '../icons-svg/lib/ArrowDownCircleFilled'
import Icon, { type BaseIconProps } from '../components'

const ArrowDownCircleFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={ArrowDownCircleFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    ArrowDownCircleFilled.displayName = 'ArrowDownCircleFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(ArrowDownCircleFilled)