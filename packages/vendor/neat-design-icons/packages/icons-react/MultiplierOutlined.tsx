// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import MultiplierOutlinedSVG from '../icons-svg/lib/MultiplierOutlined'
import Icon, { type BaseIconProps } from '../components'

const MultiplierOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={MultiplierOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    MultiplierOutlined.displayName = 'MultiplierOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(MultiplierOutlined)