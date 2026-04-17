// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import ArrowLeftOutlinedSVG from '../icons-svg/lib/ArrowLeftOutlined'
import Icon, { type BaseIconProps } from '../components'

const ArrowLeftOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={ArrowLeftOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    ArrowLeftOutlined.displayName = 'ArrowLeftOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(ArrowLeftOutlined)