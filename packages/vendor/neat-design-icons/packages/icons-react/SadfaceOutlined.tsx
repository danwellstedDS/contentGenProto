// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import SadfaceOutlinedSVG from '../icons-svg/lib/SadfaceOutlined'
import Icon, { type BaseIconProps } from '../components'

const SadfaceOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={SadfaceOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    SadfaceOutlined.displayName = 'SadfaceOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(SadfaceOutlined)