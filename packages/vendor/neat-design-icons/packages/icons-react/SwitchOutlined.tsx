// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import SwitchOutlinedSVG from '../icons-svg/lib/SwitchOutlined'
import Icon, { type BaseIconProps } from '../components'

const SwitchOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={SwitchOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    SwitchOutlined.displayName = 'SwitchOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(SwitchOutlined)