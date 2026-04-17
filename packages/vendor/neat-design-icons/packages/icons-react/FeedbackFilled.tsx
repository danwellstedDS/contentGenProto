// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import FeedbackFilledSVG from '../icons-svg/lib/FeedbackFilled'
import Icon, { type BaseIconProps } from '../components'

const FeedbackFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={FeedbackFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    FeedbackFilled.displayName = 'FeedbackFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(FeedbackFilled)