// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import TourFilledSVG from '../icons-svg/lib/TourFilled'
import Icon, { type BaseIconProps } from '../components'

const TourFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={TourFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    TourFilled.displayName = 'TourFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(TourFilled)