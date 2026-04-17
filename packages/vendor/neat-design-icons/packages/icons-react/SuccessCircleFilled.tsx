// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import SuccessCircleFilledSVG from '../icons-svg/lib/SuccessCircleFilled'
import Icon, { type BaseIconProps } from '../components'

const SuccessCircleFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={SuccessCircleFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    SuccessCircleFilled.displayName = 'SuccessCircleFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(SuccessCircleFilled)