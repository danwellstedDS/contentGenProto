// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import HeartFilledSVG from '../icons-svg/lib/HeartFilled'
import Icon, { type BaseIconProps } from '../components'

const HeartFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={HeartFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    HeartFilled.displayName = 'HeartFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(HeartFilled)