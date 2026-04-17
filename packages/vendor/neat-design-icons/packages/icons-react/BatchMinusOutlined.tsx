// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import BatchMinusOutlinedSVG from '../icons-svg/lib/BatchMinusOutlined'
import Icon, { type BaseIconProps } from '../components'

const BatchMinusOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={BatchMinusOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    BatchMinusOutlined.displayName = 'BatchMinusOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(BatchMinusOutlined)