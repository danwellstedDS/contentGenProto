// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import HelpCircleOutlinedSVG from '../icons-svg/lib/HelpCircleOutlined'
import Icon, { type BaseIconProps } from '../components'

const HelpCircleOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={HelpCircleOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    HelpCircleOutlined.displayName = 'HelpCircleOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(HelpCircleOutlined)