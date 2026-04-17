// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import ForbiddenOutlinedSVG from '../icons-svg/lib/ForbiddenOutlined'
import Icon, { type BaseIconProps } from '../components'

const ForbiddenOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={ForbiddenOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    ForbiddenOutlined.displayName = 'ForbiddenOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(ForbiddenOutlined)