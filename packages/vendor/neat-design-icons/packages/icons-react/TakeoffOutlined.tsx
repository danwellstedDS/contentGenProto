// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import TakeoffOutlinedSVG from '../icons-svg/lib/TakeoffOutlined'
import Icon, { type BaseIconProps } from '../components'

const TakeoffOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={TakeoffOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    TakeoffOutlined.displayName = 'TakeoffOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(TakeoffOutlined)