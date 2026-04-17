// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import BubbleFilledSVG from '../icons-svg/lib/BubbleFilled'
import Icon, { type BaseIconProps } from '../components'

const BubbleFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={BubbleFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    BubbleFilled.displayName = 'BubbleFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(BubbleFilled)