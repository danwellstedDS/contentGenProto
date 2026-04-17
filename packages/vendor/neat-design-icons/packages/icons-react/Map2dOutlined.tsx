// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import Map2dOutlinedSVG from '../icons-svg/lib/Map2dOutlined'
import Icon, { type BaseIconProps } from '../components'

const Map2dOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={Map2dOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    Map2dOutlined.displayName = 'Map2dOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(Map2dOutlined)