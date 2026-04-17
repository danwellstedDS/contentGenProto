// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import MoreHorizonDotOutlinedSVG from '../icons-svg/lib/MoreHorizonDotOutlined'
import Icon, { type BaseIconProps } from '../components'

const MoreHorizonDotOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={MoreHorizonDotOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    MoreHorizonDotOutlined.displayName = 'MoreHorizonDotOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(MoreHorizonDotOutlined)