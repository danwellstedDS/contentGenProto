// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import PlugOutlinedSVG from '../icons-svg/lib/PlugOutlined'
import Icon, { type BaseIconProps } from '../components'

const PlugOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={PlugOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    PlugOutlined.displayName = 'PlugOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(PlugOutlined)