// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import ArrowUpCircleFilledSVG from '../icons-svg/lib/ArrowUpCircleFilled'
import Icon, { type BaseIconProps } from '../components'

const ArrowUpCircleFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={ArrowUpCircleFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    ArrowUpCircleFilled.displayName = 'ArrowUpCircleFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(ArrowUpCircleFilled)