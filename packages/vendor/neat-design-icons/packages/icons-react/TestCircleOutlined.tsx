// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import TestCircleOutlinedSVG from '../icons-svg/lib/TestCircleOutlined'
import Icon, { type BaseIconProps } from '../components'

const TestCircleOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={TestCircleOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    TestCircleOutlined.displayName = 'TestCircleOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(TestCircleOutlined)