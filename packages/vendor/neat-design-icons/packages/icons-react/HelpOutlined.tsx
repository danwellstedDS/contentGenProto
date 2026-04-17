// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import HelpOutlinedSVG from '../icons-svg/lib/HelpOutlined'
import Icon, { type BaseIconProps } from '../components'

const HelpOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={HelpOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    HelpOutlined.displayName = 'HelpOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(HelpOutlined)