// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import CaretRightSmallSVG from '../icons-svg/lib/CaretRightSmall'
import Icon, { type BaseIconProps } from '../components'

const CaretRightSmall = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={CaretRightSmallSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    CaretRightSmall.displayName = 'CaretRightSmall'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(CaretRightSmall)