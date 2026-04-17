// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import AIRelatedFilledSVG from '../icons-svg/lib/AIRelatedFilled'
import Icon, { type BaseIconProps } from '../components'

const AIRelatedFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={AIRelatedFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    AIRelatedFilled.displayName = 'AIRelatedFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(AIRelatedFilled)