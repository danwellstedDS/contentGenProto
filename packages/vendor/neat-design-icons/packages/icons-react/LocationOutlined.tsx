// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import LocationOutlinedSVG from '../icons-svg/lib/LocationOutlined'
import Icon, { type BaseIconProps } from '../components'

const LocationOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={LocationOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    LocationOutlined.displayName = 'LocationOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(LocationOutlined)