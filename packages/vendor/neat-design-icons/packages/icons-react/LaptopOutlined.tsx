// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import LaptopOutlinedSVG from '../icons-svg/lib/LaptopOutlined'
import Icon, { type BaseIconProps } from '../components'

const LaptopOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={LaptopOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    LaptopOutlined.displayName = 'LaptopOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(LaptopOutlined)