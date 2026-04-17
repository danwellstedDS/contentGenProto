// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import PromotionFilledSVG from '../icons-svg/lib/PromotionFilled'
import Icon, { type BaseIconProps } from '../components'

const PromotionFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={PromotionFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    PromotionFilled.displayName = 'PromotionFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(PromotionFilled)