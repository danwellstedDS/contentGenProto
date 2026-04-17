// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import VolumnOutlinedSVG from '../icons-svg/lib/VolumnOutlined'
import Icon, { type BaseIconProps } from '../components'

const VolumnOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={VolumnOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    VolumnOutlined.displayName = 'VolumnOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(VolumnOutlined)