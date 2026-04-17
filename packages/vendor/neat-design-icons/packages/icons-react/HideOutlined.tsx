// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import HideOutlinedSVG from '../icons-svg/lib/HideOutlined'
import Icon, { type BaseIconProps } from '../components'

const HideOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={HideOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    HideOutlined.displayName = 'HideOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(HideOutlined)