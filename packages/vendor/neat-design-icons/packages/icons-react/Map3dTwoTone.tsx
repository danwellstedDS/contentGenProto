// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import Map3dTwoToneSVG from '../icons-svg/lib/Map3dTwoTone'
import Icon, { type BaseIconProps } from '../components'

const Map3dTwoTone = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={true} ref={ref} component={Map3dTwoToneSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    Map3dTwoTone.displayName = 'Map3dTwoTone'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(Map3dTwoTone)