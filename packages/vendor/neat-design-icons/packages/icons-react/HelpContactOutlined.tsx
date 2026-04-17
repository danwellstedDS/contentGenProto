// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import HelpContactOutlinedSVG from '../icons-svg/lib/HelpContactOutlined'
import Icon, { type BaseIconProps } from '../components'

const HelpContactOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={HelpContactOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    HelpContactOutlined.displayName = 'HelpContactOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(HelpContactOutlined)