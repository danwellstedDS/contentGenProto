// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import ArrowLeftCircleFilledSVG from '../icons-svg/lib/ArrowLeftCircleFilled'
import Icon, { type BaseIconProps } from '../components'

const ArrowLeftCircleFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={ArrowLeftCircleFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    ArrowLeftCircleFilled.displayName = 'ArrowLeftCircleFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(ArrowLeftCircleFilled)