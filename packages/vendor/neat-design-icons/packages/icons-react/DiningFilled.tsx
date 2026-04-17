// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import DiningFilledSVG from '../icons-svg/lib/DiningFilled'
import Icon, { type BaseIconProps } from '../components'

const DiningFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={DiningFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    DiningFilled.displayName = 'DiningFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(DiningFilled)