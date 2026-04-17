// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import StarOutlinedSVG from '../icons-svg/lib/StarOutlined'
import Icon, { type BaseIconProps } from '../components'

const StarOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={StarOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    StarOutlined.displayName = 'StarOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(StarOutlined)