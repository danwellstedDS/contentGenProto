// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import ArrowRightOutlinedSVG from '../icons-svg/lib/ArrowRightOutlined'
import Icon, { type BaseIconProps } from '../components'

const ArrowRightOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={ArrowRightOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    ArrowRightOutlined.displayName = 'ArrowRightOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(ArrowRightOutlined)