// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import Map3dOutlinedSVG from '../icons-svg/lib/Map3dOutlined'
import Icon, { type BaseIconProps } from '../components'

const Map3dOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={Map3dOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    Map3dOutlined.displayName = 'Map3dOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(Map3dOutlined)