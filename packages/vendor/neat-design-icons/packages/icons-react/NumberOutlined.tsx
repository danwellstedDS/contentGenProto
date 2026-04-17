// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import NumberOutlinedSVG from '../icons-svg/lib/NumberOutlined'
import Icon, { type BaseIconProps } from '../components'

const NumberOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={NumberOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    NumberOutlined.displayName = 'NumberOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(NumberOutlined)