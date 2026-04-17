// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import LocationFilledSVG from '../icons-svg/lib/LocationFilled'
import Icon, { type BaseIconProps } from '../components'

const LocationFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={LocationFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    LocationFilled.displayName = 'LocationFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(LocationFilled)