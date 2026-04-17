// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import MealFilledSVG from '../icons-svg/lib/MealFilled'
import Icon, { type BaseIconProps } from '../components'

const MealFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={MealFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    MealFilled.displayName = 'MealFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(MealFilled)