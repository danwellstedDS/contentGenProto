// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import TestCircleFilledSVG from '../icons-svg/lib/TestCircleFilled'
import Icon, { type BaseIconProps } from '../components'

const TestCircleFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={TestCircleFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    TestCircleFilled.displayName = 'TestCircleFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(TestCircleFilled)