// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import ArrowUpLineOutlinedSVG from '../icons-svg/lib/ArrowUpLineOutlined'
import Icon, { type BaseIconProps } from '../components'

const ArrowUpLineOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={ArrowUpLineOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    ArrowUpLineOutlined.displayName = 'ArrowUpLineOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(ArrowUpLineOutlined)