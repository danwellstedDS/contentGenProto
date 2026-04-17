// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import SuccessOutlinedSVG from '../icons-svg/lib/SuccessOutlined'
import Icon, { type BaseIconProps } from '../components'

const SuccessOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={SuccessOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    SuccessOutlined.displayName = 'SuccessOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(SuccessOutlined)