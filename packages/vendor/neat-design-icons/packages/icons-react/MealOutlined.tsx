// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import MealOutlinedSVG from '../icons-svg/lib/MealOutlined'
import Icon, { type BaseIconProps } from '../components'

const MealOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={MealOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    MealOutlined.displayName = 'MealOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(MealOutlined)