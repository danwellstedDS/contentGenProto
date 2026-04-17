// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import FeedbackOutlinedSVG from '../icons-svg/lib/FeedbackOutlined'
import Icon, { type BaseIconProps } from '../components'

const FeedbackOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={FeedbackOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    FeedbackOutlined.displayName = 'FeedbackOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(FeedbackOutlined)