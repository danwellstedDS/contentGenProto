// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import SuccessCircleOutlinedSVG from '../icons-svg/lib/SuccessCircleOutlined'
import Icon, { type BaseIconProps } from '../components'

const SuccessCircleOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={SuccessCircleOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    SuccessCircleOutlined.displayName = 'SuccessCircleOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(SuccessCircleOutlined)