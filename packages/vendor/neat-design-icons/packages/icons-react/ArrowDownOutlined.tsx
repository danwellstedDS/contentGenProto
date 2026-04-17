// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import ArrowDownOutlinedSVG from '../icons-svg/lib/ArrowDownOutlined'
import Icon, { type BaseIconProps } from '../components'

const ArrowDownOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={ArrowDownOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    ArrowDownOutlined.displayName = 'ArrowDownOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(ArrowDownOutlined)