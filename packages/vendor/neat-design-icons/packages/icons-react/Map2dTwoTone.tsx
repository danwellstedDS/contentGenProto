// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import Map2dTwoToneSVG from '../icons-svg/lib/Map2dTwoTone'
import Icon, { type BaseIconProps } from '../components'

const Map2dTwoTone = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={true} ref={ref} component={Map2dTwoToneSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    Map2dTwoTone.displayName = 'Map2dTwoTone'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(Map2dTwoTone)