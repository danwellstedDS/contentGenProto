// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import ArrowRightCircleFilledSVG from '../icons-svg/lib/ArrowRightCircleFilled'
import Icon, { type BaseIconProps } from '../components'

const ArrowRightCircleFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={ArrowRightCircleFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    ArrowRightCircleFilled.displayName = 'ArrowRightCircleFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(ArrowRightCircleFilled)