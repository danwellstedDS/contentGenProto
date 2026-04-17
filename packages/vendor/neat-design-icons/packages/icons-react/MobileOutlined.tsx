// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import MobileOutlinedSVG from '../icons-svg/lib/MobileOutlined'
import Icon, { type BaseIconProps } from '../components'

const MobileOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={MobileOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    MobileOutlined.displayName = 'MobileOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(MobileOutlined)