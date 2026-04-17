// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import ArrowDownLineOutlinedSVG from '../icons-svg/lib/ArrowDownLineOutlined'
import Icon, { type BaseIconProps } from '../components'

const ArrowDownLineOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={ArrowDownLineOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    ArrowDownLineOutlined.displayName = 'ArrowDownLineOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(ArrowDownLineOutlined)