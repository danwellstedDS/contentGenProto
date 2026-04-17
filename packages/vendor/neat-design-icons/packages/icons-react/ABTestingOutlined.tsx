// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import ABTestingOutlinedSVG from '../icons-svg/lib/ABTestingOutlined'
import Icon, { type BaseIconProps } from '../components'

const ABTestingOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={ABTestingOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    ABTestingOutlined.displayName = 'ABTestingOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(ABTestingOutlined)