// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import ViewOutlinedSVG from '../icons-svg/lib/ViewOutlined'
import Icon, { type BaseIconProps } from '../components'

const ViewOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={ViewOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    ViewOutlined.displayName = 'ViewOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(ViewOutlined)