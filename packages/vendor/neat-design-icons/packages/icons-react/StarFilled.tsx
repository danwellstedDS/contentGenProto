// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import StarFilledSVG from '../icons-svg/lib/StarFilled'
import Icon, { type BaseIconProps } from '../components'

const StarFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={StarFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    StarFilled.displayName = 'StarFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(StarFilled)