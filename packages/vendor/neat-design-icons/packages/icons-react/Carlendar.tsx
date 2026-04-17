// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import CarlendarSVG from '../icons-svg/lib/Carlendar'
import Icon, { type BaseIconProps } from '../components'

const Carlendar = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={CarlendarSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    Carlendar.displayName = 'Carlendar'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(Carlendar)